import { Injectable } from '@angular/core';
import { Category } from '../Data/Category';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [
    { id: 1, name: 'Technology', slug: 'technology' },
    { id: 2, name: 'Business', slug: 'business' },
    { id: 3, name: 'Politics', slug: 'politics' },
    { id: 4, name: 'Environment', slug: 'environment' },
    { id: 5, name: 'Sports', slug: 'sports' },
    { id: 6, name: 'Culture', slug: 'culture' },
    { id: 7, name: 'Science', slug: 'science' },
  ];

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }
}
