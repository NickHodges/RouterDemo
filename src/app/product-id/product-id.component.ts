import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css']
})
export class ProductIdComponent implements OnInit {
  theId: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.theId = +params.get('id');
    });
  }
}
