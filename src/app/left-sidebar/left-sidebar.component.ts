import { Component } from '@angular/core';
import { Category } from '../Data/Category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../Services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent {
  categories: Category[] = [];
  loading = true;
  activeCategory: string | null = null;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.loadCategories();
  }

  loadCategories(): void {
    this.loading = true;
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading categories', error);
        this.loading = false;
      },
    });
  }

  selectCategory(category: Category): void {
    this.router.navigate(['/category', category.slug]);
  }
}
