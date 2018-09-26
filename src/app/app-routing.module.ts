import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ArticlesComponent } from './articles/articles.component';
import { AboutComponent } from './about/about.component';
import { GemstonesComponent } from './gemstones/gemstones.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', component: HomePageComponent },
  {path:'articles', component:ArticlesComponent},
  {path:'gemstones', component:GemstonesComponent},
  {path:'sidenav', component:SidenavComponent},
  {path:'about',component:AboutComponent},
  {path:'privacypolicy',component:PrivacypolicyComponent},
  {path:'termsandconditions',component:TermsandconditionsComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
