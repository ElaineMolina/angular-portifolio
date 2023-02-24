import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PortifolioComponent } from './components/portifolio/portifolio.component';
import { PortifolioPageComponent } from './pages/portifolio-page/portifolio-page.component';
import { PortifolioRoutingModule } from './portifolio-routing.module';


@NgModule({
  declarations: [
    PortifolioComponent,
    PortifolioPageComponent
  ],
  imports: [
    CommonModule,
    PortifolioRoutingModule
  ],
  exports: [
    PortifolioPageComponent
  ]
})
export class PortifolioModule { }
