import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'portifolio',
    loadChildren: () => import('./feature/portifolio/portifolio.module').then(m => m.PortifolioModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./feature/blog/blog.module').then(m => m.BlogModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
