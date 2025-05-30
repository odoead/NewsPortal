import { Component, Input, input, OnInit } from '@angular/core';
import { ArticlePoster } from '../Data/article.model';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-poster-item',
  standalone: true,
  imports: [DatePipe, CommonModule, RouterModule],
  templateUrl: './article-poster-item.component.html',
  styleUrls: ['./article-poster-item.component.css'],
})
export class ArticlePosterItemComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() article!: ArticlePoster;
  showPreview = false;
  previewTimer: any;
  onMouseEnter(): void {
    this.previewTimer = setTimeout(() => { }, 500);
  }
  onMouseLeave(): void {
    clearTimeout(this.previewTimer);

  }
}
