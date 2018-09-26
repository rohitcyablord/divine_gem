import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticlesComponent } from './articles/articles.component';
import { AboutComponent } from './about/about.component';
import { GemstonesComponent } from './gemstones/gemstones.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { DivineService } from './_service/Divine';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArticlesComponent,
    AboutComponent,
    GemstonesComponent,
    SidenavComponent,
    PrivacypolicyComponent,
    TermsandconditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ DivineService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
