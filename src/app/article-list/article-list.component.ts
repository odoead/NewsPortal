import { Component, OnInit } from '@angular/core';
import { Article, ArticlePoster } from '../Data/article.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { ArticleService } from '../Services/article.service';
import { ArticlePosterItemComponent } from '../article-poster-item/article-poster-item.component';
import { CommonModule, TitleCasePipe } from '@angular/common';

enum FilterType {
  Default = 'default',
  Latest = 'latest',
  MostPopular = 'popular',
}

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticlePosterItemComponent, TitleCasePipe, CommonModule],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles!: ArticlePoster[];
  currentCategory: string | null = null;
  currentFilter: FilterType = FilterType.Default;
  baseArticles!: ArticlePoster[];
  /**
   *
   */
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        tap(() => {
          this.articles = [];
          this.currentFilter = FilterType.Default;
        }),
        switchMap((params) => {
          this.currentCategory = params.get('category');

          if (this.currentCategory) {
            return this.articleService.getArticlesByCategory1(
              this.currentCategory
            );
          } else {
            return this.articleService.getArticles();
          }
        })
      )
      .subscribe({
        next: (articles) => {
          this.articles = articles;
          this.baseArticles = [...articles];
        },
        error: (error) => {
          console.error('Error loading articles', error);
        },
      });
  }

  applyFilter(filter: string) {
    if (Object.values(FilterType).includes(filter as FilterType)) {
      this.currentFilter = filter as FilterType;
    }

    switch (filter) {
      case FilterType.Default:
        this.articles = [...this.baseArticles];
        break;
      case FilterType.MostPopular:
        this.articles = [...this.baseArticles].sort(
          (x1, x2) => x2.popularity - x1.popularity
        );
        break;
      case FilterType.Latest:
        this.articles = [...this.baseArticles].sort(
          (x1, x2) => new Date(x2.date).getTime() - new Date(x1.date).getTime()
        );
        break;
    }
  }

  loadMoreArticles() {
    this.articleService.loadMoreArticles(this.articles.length).subscribe({
      next: (newArticles) => {
        this.articles = [...this.articles, ...newArticles];
        this.baseArticles = [...this.baseArticles, ...newArticles];
      },
      error: (error) => {
        console.error('Error loading more articles', error);
      },
    });
  }
}
