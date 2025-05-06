import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ArticleComponent } from '../article/article.component';
import { CategoryService } from '../Services/category.service';
import { Category } from '../Data/Category';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-mobile-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    RouterModule, FormsModule,
    SearchBarComponent
],
  templateUrl: './mobile-sidebar.component.html',
  styleUrls: ['./mobile-sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() isSidebarOpen: boolean = false;
  @Output() sidebarToggle = new EventEmitter<void>();
  categories: Category[] = [];
  searchQuery: string = '';


  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Error loading categories', error);
      },
    });
  }

  toggleSidebar(): void {
    this.sidebarToggle.emit();
  }

  closeSidebar(): void {
    this.sidebarToggle.emit();
  }

  selectCategory(category: Category): void {
    const slug = category.slug;
    this.router.navigate(['/category', slug]);
    this.closeSidebar();

    console.log('Navigating to category:', slug);
  }

  executeSearch() {
    if (this.searchQuery && this.searchQuery.trim().length > 2) {
      this.router.navigate(['/search'], {
        queryParams: { query: this.searchQuery.trim() }
      });

      if (this.isMobile && this.isSidebarOpen) {
        this.closeSidebar();
      }
    }
  }

   
}
