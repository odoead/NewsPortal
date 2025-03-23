import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePosterItemComponent } from './article-poster-item.component';

describe('ArticlePosterItemComponent', () => {
  let component: ArticlePosterItemComponent;
  let fixture: ComponentFixture<ArticlePosterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlePosterItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlePosterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
