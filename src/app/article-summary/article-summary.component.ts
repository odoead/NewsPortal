import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-summary.component.html',
  styleUrl: './article-summary.component.css',
})
export class ArticleSummaryComponent implements OnInit {
  selectedSummaryId!: string;
  selectedSummary!: {
    points: number;
    cardName: string;
    cardData: any;
  };
  @Input() summary!: Array<{
    points: number;
    cardName: string;
    cardData: any;
  }>;

  ngOnInit(): void {
    this.selectedSummaryId = this.summary[0].cardName;
    this.selectedSummary = this.summary[0];
  }

  getColorByRating(points: number): string {
    if (points >= 8) return 'green';
    if (points >= 5) return 'orange';
    return 'red';
  }
  onMouseEnter(id: string): void {
    this.selectedSummaryId = id;
    this.selectedSummary = this.summary.filter((singleSummary) => singleSummary.cardName.includes(id))[0];
  }
}
