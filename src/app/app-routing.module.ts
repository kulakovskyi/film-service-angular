import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule)},
  {path: 'movie', loadChildren: () => import('./pages/movie-details/move-details.module').then(x => x.MoveDetailsModule)},
  {path: 'search', loadChildren: () => import('./pages/search/search.module').then(x => x.SearchModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
