import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'post-list',
    component: PostListComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }

];


  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
