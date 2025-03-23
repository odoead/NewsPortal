import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-of-contents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-of-contents.component.html',
  styleUrl: './table-of-contents.component.css'
})
export class TableOfContentsComponent {
  @Input() tableOfContents!: string[];
  @Input() activeSection!: string;
  @Output() sectionSelected = new EventEmitter<string>();

  selectSection(section: string): void {
    this.sectionSelected.emit(section);
  }
}
