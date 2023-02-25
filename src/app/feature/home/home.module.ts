import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
