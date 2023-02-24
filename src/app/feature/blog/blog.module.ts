import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogPageComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
  ],
  exports:[
    BlogPageComponent
  ]
})
export class BlogModule { }
