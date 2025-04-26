import { Component, ElementRef } from '@angular/core';
import { ArticleService } from '../Services/article.service';
import { CommonModule } from '@angular/common';
import { Article } from '../Data/article.model';
import { AuthorInfoComponent } from '../author-info/author-info.component';
import { TableOfContentsComponent } from '../table-of-contents/table-of-contents.component';
import { ArticleSummaryComponent } from '../article-summary/article-summary.component';
import { MatTableModule } from '@angular/material/table';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    CommonModule,
    AuthorInfoComponent,
    TableOfContentsComponent,
    ArticleSummaryComponent, MatTableModule,RouterModule
  ],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  article!: Article;
  activeSection: string = '';
  displayedColumns: string[] = [];

  constructor(private route: ActivatedRoute,private articleService: ArticleService, private elRef: ElementRef, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.articleService.getArticleById(id).subscribe({
      next: (data) => {
        this.article = data;

        if (this.article && this.article.tableOfContents?.length) {
          this.activeSection = this.article.tableOfContents[0];
        }

        const tablePart = this.article?.parts?.find(part => part.type === 'table');
        if (tablePart?.data?.columns) {
          this.displayedColumns = tablePart.data.columns.map((q: any) => q.key);
        }
      },
      error: (err) => console.error('Error fetching article:', err),
    });
  }

  getSectionId(title: any): string {
    return title ? title.replace(/\s+/g, '-').toLowerCase() : '';
  }

  setActiveSection(section: string): void {
    this.activeSection = section;
    const sectionId = this.getSectionId(section);
    const element = this.elRef.nativeElement.querySelector(`#${sectionId}`);//get elem by id

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Method to check if a section is currently active
  isActiveSection(section: string): boolean {
    return this.activeSection === section;
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getColorByRating(points: number): string {
    if (points >= 8) return 'green';
    if (points >= 5) return 'orange';
    return 'red';
  }
}
