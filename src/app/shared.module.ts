import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { SearchBoxComponent } from './shared/components/search-box/search-box.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';




@NgModule({
  declarations: [
    
     AboutPageComponent,
     ContactPageComponent,
     HomePageComponent,
     LoadingSpinnerComponent,
     SearchBoxComponent,
     SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
     AboutPageComponent,
     ContactPageComponent,
     HomePageComponent,
     LoadingSpinnerComponent,
     SearchBoxComponent,
     SidebarComponent,
  ] 
})
export class SharedModule { }
