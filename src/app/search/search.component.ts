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
  paginationItems: (number | string)[] = [];
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

  isNumber(item: string | number): item is number {
    return typeof item === 'number';
  }

  loadArticlesBySearch() {
    if (this.searchQuery === '') {
      return;
    }

    this.articleService
      .countSearchArticles(this.searchQuery)
      .subscribe((total) => {
        this.totalPages = Math.ceil(total / this.pageSize);
        //this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
        //this.pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        this.generatePaginationItems();
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
      //this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      this.generatePaginationItems();
    });
  }

  generatePaginationItems(): void {
    const items: (number | string)[] = [];

    // Always show first page
    items.push(1);

    // Logic for showing pagination based on current page
    if (this.totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 2; i <= this.totalPages; i++) {
        items.push(i);
      }
    } else {
      // Show ellipsis and selective pages
      if (this.currentPage > 3) {
        items.push('...');
      }

      // Pages around current page
      const startPage = Math.max(2, this.currentPage - 1);
      const endPage = Math.min(this.totalPages - 1, this.currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        items.push(i);
      }

      if (this.currentPage < this.totalPages - 2) {
        items.push('...');
      }

      // Always show last page
      if (this.totalPages > 1) {
        items.push(this.totalPages);
      }
    }

    this.paginationItems = items;
  }





  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) {
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
