import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { SearchComponent } from './search/search.component';
import { ArticleComponent } from './article/article.component';
import { CreateArticleComponent } from './create-article/create-article.component';

export const routes: Routes = [
  { path: '*', redirectTo: '' },
  //{ path: '', component: ArticleListComponent },
  { path: '', component: ArticleComponent },
  //{ path: '', component: CreateArticleComponent },

  // { path: 'category/:slug', component: ArticleListComponent },

  { path: 'search', component: SearchComponent },
  { path: 'category/:category', component: SearchComponent },
];
