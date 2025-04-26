export interface Article {
  id: number;
  title: string;
  image: string;
  date: Date;
  tags: string[];
  category: string;
  popularity: number;

  parts: Array<{
    type: 'video' | 'text' | 'image' | 'imageList' | 'carousel' | 'table';
    data: any;
    title?: string;
  }>;

  authorInfo: {
    name: string;
    image: string;
    description: string;
  };

  summary: {
    points: number;
    cardName: string;
    cardData: any;
  }[];

  tableOfContents: string[];
}

export interface ArticlePoster {
  id: number;
  name: string;
  image: string;
  date: Date;
  tags: string[];
  category: string;
  popularity: number;
  previewText: string;
  content?: string;
}
