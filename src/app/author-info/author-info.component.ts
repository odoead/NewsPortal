import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-author-info',
  standalone: true,
  imports: [],
  templateUrl: './author-info.component.html',
  styleUrl: './author-info.component.css',
})
export class AuthorInfoComponent {
  @Input() authorInfo!: {
    name: string;
    image: string;
    description: string;
  };
}
