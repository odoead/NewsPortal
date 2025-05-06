import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [RouterModule,MatFormFieldModule,MatIconModule ,CommonModule,FormsModule ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() isMobile: boolean = false;
  @Output() afterSearch = new EventEmitter<void>();
  @Output() closeSidebar = new EventEmitter<void>();

  searchQuery: string = '';

  constructor(private router: Router) {}

  executeSearch() {
    const trimmed = this.searchQuery.trim();
    if (trimmed.length > 2) {
      this.router.navigate(['/search'], { queryParams: { query: trimmed } });

      if (this.isMobile) {
        this.closeSidebar.emit();
      }

      this.searchQuery = '';   
      this.afterSearch.emit();
      
    }
  }
}
