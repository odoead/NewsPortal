import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Article, ArticlePoster } from '../Data/article.model';
import { Title } from '@angular/platform-browser';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  getTestArticle(): Observable<Article> {
    return of<Article>({
      title: 'Understanding Angular Components Architecture',
      image: 'assets/images/5.jpg',
      date: new Date('2025-03-09'),
      tags: ['Angular', 'Web Development', 'Frontend'],
      category: 'Development',
      popularity: 4.7,

      authorInfo: {
        name: 'Jane Developer',
        image: 'assets/images/5.jpg',
        description:
          'Senior Angular Developer with 8 years of experience building enterprise applications.',
      },

      tableOfContents: [
        'Introduction',
        'Component Basics',
        'Component Communication',
        'Advanced Techniques',
        'Conclusion',
      ],

      summary: [
        {
          points: 9.5,
          cardName: 'Usability',
          cardData:
            'Angular components provide exceptional usability with clear separation of concerns.',
        },
        {
          points: 8.7,
          cardName: 'Learning Curve',
          cardData:
            'Moderate learning curve that pays off with increased productivity.',
        },
        {
          points: 9.2,
          cardName: 'Performance',
          cardData:
            "Excellent performance with Angular's change detection strategy.",
        },
      ],

      parts: [
        {
          type: 'text',
          title: 'Introduction',
          data: '<p>Angular components are the fundamental building blocks of Angular applications. They control a patch of screen called a view, and consist of a TypeScript class, an HTML template, and typically CSS styles.</p>',
        },
        {
          type: 'image',
          title: 'Component Basics',
          data: {
            url: 'assets/images/2.jpg',
            alt: 'Angular Component Structure Diagram',
            caption: 'Basic structure of an Angular component',
          },
        },
        {
          type: 'text',
          title: 'Component Communication',
          data: '<p>Components communicate with each other using inputs, outputs, services, and other mechanisms provided by the Angular framework.</p>',
        },
        {
          type: 'video',
          title: 'Advanced Techniques',
          data: {
            url: 'https://www.youtube.com/embed?v=1qsmDJZQYNg',
            caption: 'Tutorial on advanced component techniques',
          },
        },
        {
          type: 'carousel',
          title: 'Example Implementations',
          data: [
            {
              url: 'assets/images/1.jpg',
              caption: 'Dashboard implementation',
            },
            {
              url: 'assets/images/2.jpg',
              caption: 'Form component implementation',
            },
            {
              url: 'assets/images/3.jpg',
              caption: 'Table component implementation',
            },
          ],
        },
        {
          type: 'table',
          title: 'Component Comparison',
          data: {
            columns: [
              { key: 'feature', label: 'Feature' },
              { key: 'angular', label: 'Angular' },
              { key: 'react', label: 'React' },
              { key: 'vue', label: 'Vue' },
            ],
            rows: [
              {
                feature: 'Learning Curve',
                angular: 'Steep',
                react: 'Moderate',
                vue: 'Gentle',
              },
              {
                feature: 'Performance',
                angular: 'Excellent',
                react: 'Excellent',
                vue: 'Very Good',
              },
              {
                feature: 'Tooling',
                angular: 'Comprehensive',
                react: 'Good',
                vue: 'Good',
              },
            ],
          },
        },
        {
          type: 'text',
          title: 'Conclusion',
          data: '<p>Angular components provide a robust architecture for building complex applications. By understanding their structure and capabilities, developers can create maintainable and scalable applications.</p>',
        },
      ],
    });
  }

  private mockArticles: ArticlePoster[] = [
    {
      id: 1111,
      name: 'Global small',
      image: 'assets/images/1.jpg',
      date: new Date('2025-02-28'),
      tags: ['climate', 'global', 'environment'],
      category: 'environment',
      popularity: 98,
      previewText: 'World  small',
    },
    {
      id: 111,
      name: 'Global Climate Summit Concludes with New Commitments Global Climatee Summit Concludes with New Commitments Global Climate Summit New',
      image: 'assets/images/2.jpg',
      date: new Date('2025-02-28'),
      tags: ['climate', 'global', 'environment'],
      category: 'environment',
      popularity: 98,
      previewText:
        'Global Climate Summit Concludes with New CommitmentsGlobal Climate Summit Concludes with New CommitmentsGlobal Climate Summit Concludes with New Commitments Global Climate Summit Concludes with New Commitments',
    },
    {
      id: 1,
      name: 'Global Climate Summit Concludes with New Commitments',
      image: 'assets/images/3.jpg',
      date: new Date('2025-02-28'),
      tags: ['climate', 'global', 'environment'],
      category: 'environment',
      popularity: 98,
      previewText:
        'World leaders agreed on ambitious targets to reduce carbon emissions by 2030.',
    },
    {
      id: 2,
      name: 'Tech Giants Announce AI Collaboration Initiative',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-01'),
      tags: ['technology', 'AI', 'innovation'],
      category: 'technology',
      popularity: 95,
      previewText:
        'Major tech companies join forces to establish ethical standards for artificial intelligence development.',
    },
    {
      id: 3,
      name: 'New Breakthrough in Quantum Computing',
      image: 'assets/images/3.jpg',
      date: new Date('2025-02-27'),
      tags: ['quantum', 'computing', 'research'],
      category: 'technology',
      popularity: 87,
      previewText:
        'Scientists achieve stable quantum entanglement at room temperature, paving way for practical applications.',
    },
    {
      id: 4,
      name: 'Global Stock Markets Hit Record Highs',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['finance', 'stocks', 'economy'],
      category: 'business',
      popularity: 92,
      previewText:
        'Major indices surged following positive economic data and corporate earnings reports.',
    },
    {
      id: 5,
      name: 'New Archaeological Discovery in Egypt',
      image: 'assets/images/3.jpg',
      date: new Date('2025-02-25'),
      tags: ['archaeology', 'history', 'egypt'],
      category: 'culture',
      popularity: 9999,
      previewText:
        'Archaeologists uncover ancient temple complex dating back over 4,000 years.',
    },
    {
      id: 6,
      name: 'Major Sports Championship Finals Set',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-01'),
      tags: ['sports', 'championship', 'finals'],
      category: 'sports',
      popularity: 89,
      previewText:
        'Underdog team makes surprising run to championship finals, setting up dramatic showdown.',
    },
    {
      id: 7,
      name: 'Healthcare Reform Bill Passes Senate',
      image: 'assets/images/3.jpg',
      date: new Date('2025-02-28'),
      tags: ['politics', 'healthcare', 'legislation'],
      category: 'politics',
      popularity: 94,
      previewText:
        'Landmark healthcare legislation moves forward after months of negotiation.',
    },
    {
      id: 8,
      name: 'Record-Breaking Weather Phenomenon Observed1',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 85,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 9,
      name: 'Record-Breaking Weather Phenomenon Observed2',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 815,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 10,
      name: 'Record-Breaking Weather Phenomenon Observed3',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 13,
      name: 'Record-Breaking Weather Phenomenon Observed4',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 11,
      name: 'Record-Breaking Weather Phenomenon Observed5',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
    {
      id: 12,
      name: 'Record-Breaking Weather Phenomenon Observed6',
      image: 'assets/images/3.jpg',
      date: new Date('2025-03-02'),
      tags: ['weather', 'climate', 'science'],
      category: 'environment',
      popularity: 851,
      previewText:
        'Meteorologists document unprecedented atmospheric patterns linked to changing climate conditions.',
    },
  ];

  constructor() { }

  getArticles(): Observable<ArticlePoster[]> {
    return of([...this.mockArticles]).pipe(delay(800));
  }

  getArticlesByCategory1(category: string): Observable<ArticlePoster[]> {
    const filteredArticles = this.mockArticles.filter(
      (article) => article.category === category
    );
    return of(filteredArticles).pipe(delay(800));
  }

  getPopularArticles(limit: number = 5): Observable<ArticlePoster[]> {
    const sortedArticles = [...this.mockArticles]
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, limit);
    return of(sortedArticles);
  }

  getLatestArticles(): Observable<ArticlePoster[]> {
    const sortedArticles = [...this.mockArticles].sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    );
    return of(sortedArticles);
  }

  loadMoreArticles(currentCount: number): Observable<ArticlePoster[]> {
    const additionalArticles: ArticlePoster[] = [
      {
        id: currentCount + 1,
        name: 'New Space Telescope Reveals Distant Galaxies',
        image: 'assets/images/4.jpg',
        date: new Date('2025-02-24'),
        tags: ['astronomy', 'space', 'science'],
        category: 'science',
        popularity: 91,
        previewText:
          'Revolutionary telescope captures images of galaxies formed shortly after the Big Bang.',
      },
      {
        id: currentCount + 2,
        name: 'Revolutionary Electric Vehicle Battery Developed',
        image: 'assets/images/4.jpg',
        date: new Date('2025-02-26'),
        tags: ['technology', 'automotive', 'energy'],
        category: 'technology',
        popularity: 88,
        previewText:
          'New battery technology promises 1000-mile range and 5-minute charging time for electric vehicles.',
      },
      {
        id: currentCount + 3,
        name: 'Global Music Festival Announces Lineup',
        image: 'assets/images/4.jpg',
        date: new Date('2025-03-01'),
        tags: ['music', 'entertainment', 'festival'],
        category: 'culture',
        popularity: 82,
        previewText:
          'Annual international music celebration reveals star-studded roster for summer event.',
      },
    ];

    return of(additionalArticles).pipe(delay(1000));
  }

  countSearchArticles(query: string): Observable<number> {
    const searchNormalized = query.toLowerCase();
    const result = this.mockArticles.filter(
      (article) =>
        article.name.toLowerCase().includes(query) ||
        article.previewText.toLowerCase().includes(query)
    ).length;
    return of(result);
  }

  searchArticles(
    query: string,
    page: number = 1,
    pageSize: number = 5
  ): Observable<ArticlePoster[]> {
    const lowerQuery = query.toLowerCase();
    const filtered = this.mockArticles.filter(
      (article) =>
        article.name.toLowerCase().includes(lowerQuery) ||
        article.previewText.toLowerCase().includes(lowerQuery) ||
        article.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
    const start = (page - 1) * pageSize;
    return of(filtered.slice(start, start + pageSize)).pipe(delay(800));
  }

  getArticlesByCategory(
    currentCategory: string,
    currentPage: number,
    pageSize: number
  ): Observable<ArticlePoster[]> {
    const filtered = this.mockArticles.filter(
      (article) =>
        article.category.toLowerCase() === currentCategory.toLowerCase()
    );
    const start = (currentPage - 1) * pageSize;
    return of(filtered.slice(start, start + pageSize)).pipe(delay(800));
  }

  countArticlesByCategory(category: string): Observable<number> {
    const count = this.mockArticles.filter(
      (article) => article.category.toLowerCase() === category.toLowerCase()
    ).length;
    return of(count);
  }
}
