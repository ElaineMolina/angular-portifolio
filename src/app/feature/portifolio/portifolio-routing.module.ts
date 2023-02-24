import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortifolioPageComponent } from './pages/portifolio-page/portifolio-page.component';

const routes: Routes = [
  {path: '', component: PortifolioPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortifolioRoutingModule { }
