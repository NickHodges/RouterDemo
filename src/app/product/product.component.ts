import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  prodType: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.prodType = params.get('prodtype');
    });
  }

  goProducts() {
    this.router.navigate(['/product'], { queryParams: { prodtype: 'popular' } })
  }
}
