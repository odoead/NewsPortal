import { Component } from '@angular/core';
import { ArticleService } from '../Services/article.service';
import { Router } from '@angular/router';
import { ArticlePoster } from '../Data/article.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent {
  popularArticles: ArticlePoster[] = [];

  constructor(
    private newsService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadPopularArticles();
  }

  loadPopularArticles(): void {
    this.newsService.getPopularArticles(5).subscribe({
      next: (articles) => {
        this.popularArticles = articles;
      },
      error: (error) => {
        console.error('Error loading popular articles', error);
      }
    });
  }
}
