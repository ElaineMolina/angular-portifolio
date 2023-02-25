import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PortifolioComponent } from './components/portifolio/portifolio.component';
import { PortifolioPageComponent } from './pages/portifolio-page/portifolio-page.component';
import { PortifolioRoutingModule } from './portifolio-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    PortifolioComponent,
    PortifolioPageComponent
  ],
  imports: [
    CommonModule,
    PortifolioRoutingModule,
    MatSidenavModule

  ],
  exports: [
    PortifolioPageComponent
  ]
})
export class PortifolioModule { }
