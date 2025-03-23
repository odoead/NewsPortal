import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../Services/article.service';
import { ActivatedRoute } from '@angular/router';
import { ArticlePoster } from '../Data/article.model';
import { ArticleComponent } from '../article/article.component';
import { ArticlePosterItemComponent } from '../article-poster-item/article-poster-item.component';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ArticlePosterItemComponent, TitleCasePipe, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  articles: ArticlePoster[] = [];
  currentMode: 'search' | 'category' = 'search';
  searchQuery: string = '';
  currentCategory: string = '';

  startPagination = 5;
  endPagination = 2;
  betweenSelectedPagination = 3;

  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 1;
  pages: number[] = [];

  /**
   *
   */
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const category = params.get('category');
      if (category) {
        this.currentMode = 'category';
        this.currentCategory = category;
        this.currentPage = 1;
        this.loadArticlesByCategory();
      }
    });

    this.route.queryParamMap.subscribe((params) => {
      const query = params.get('query');
      if (query) {
        this.currentMode = 'search';
        this.searchQuery = query;
        this.currentPage = 1;
        this.loadArticlesBySearch();
      }
    });
  }

  loadArticlesBySearch() {
    if (this.searchQuery === '') {
      return;
    }

    this.articleService
      .countSearchArticles(this.searchQuery)
      .subscribe((total) => {
        this.totalPages = Math.ceil(total / this.pageSize);
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
        //this.pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        this.updatePages()

      });

    this.articleService
      .searchArticles(this.searchQuery, this.currentPage, this.pageSize)
      .subscribe((articles) => {
        this.articles = articles;
      });
  }

  loadArticlesByCategory() {
    if (!this.currentCategory) {
      return;
    }

    this.articleService.getArticlesByCategory(this.currentCategory, this.currentPage, this.pageSize).subscribe((articles) => {
      this.articles = articles;
    });

    this.articleService.countArticlesByCategory(this.currentCategory).subscribe((total) => {
      this.totalPages = Math.ceil(total / this.pageSize);
      //this.pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      this.updatePages()

    });
  }

  updatePages() {
    const currentPage = this.currentPage;
    const totalPages = this.totalPages;

    if (totalPages <= 10) {
      this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
      return;
    }

    const startPages = [1, 2, 3, 4, 5];
    const endPages = [totalPages - 1, totalPages];

    const middlePages = [];
    for (let i = Math.max(this.startPagination + 1, currentPage - this.betweenSelectedPagination);
      i <= Math.min(totalPages - this.endPagination, currentPage + this.betweenSelectedPagination); i++) {
      middlePages.push(i);
    }

    this.pages = [...startPages];



    this.pages.push(...middlePages);


    this.pages.push(...endPages);
  }





  goToPage(page: number) {
    if (page > this.totalPages) {
      return;
    }

    this.currentPage = page;
    if (this.currentMode === 'search') {
      this.loadArticlesBySearch();
    } else {
      this.loadArticlesByCategory();
    }
  }
}
