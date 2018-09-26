import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gem } from '../gems';
import { GEM } from '../gemsDetails';
import { DivineService } from '../_service/Divine';

@Component({
  selector: 'app-gemstones',
  templateUrl: './gemstones.component.html',
  styleUrls: ['./gemstones.component.css']
})

export class GemstonesComponent implements OnInit {

  gems : Gem[] = GEM;
  gemData :any;
  proName: any;

  constructor(private _service: DivineService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit() {
    this.route.params
    .subscribe((product) =>
      this.proName = product.productID
    );
    console.log(this.proName);
    // this.displayProdcutAsCate(this.catName);
  }

}
