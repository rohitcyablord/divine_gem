import { Component } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticlesComponent } from './articles/articles.component';
import { AboutComponent } from './about/about.component';
import { GemstonesComponent } from './gemstones/gemstones.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';

import { Gem } from './gems';
import { GEM } from './gemsDetails';
import { DivineService } from './_service/Divine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'nyasa';
  gems : Gem[]= GEM;
  gemData :any;

  constructor(private _service: DivineService){

  }
}
