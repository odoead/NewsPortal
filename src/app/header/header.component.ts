import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, CommonModule, MatFormFieldModule, MatInputModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() isMobile!: boolean;
  @Input() isSidebarOpen!: boolean;
  @Output() toggleSidebar = new EventEmitter<void>();

  searchQuery: string = '';
  constructor(private router: Router) { }


  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  executeSearch() {
    if (this.searchQuery && this.searchQuery.trim().length > 2) {
      this.router.navigate(['/search'], {
        queryParams: { query: this.searchQuery.trim() }
      });

      // If on mobile and sidebar is open, close it
      if (this.isMobile && this.isSidebarOpen) {
        this.onToggleSidebar();
      }
    }
  }

  //test
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
