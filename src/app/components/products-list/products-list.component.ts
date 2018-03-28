import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public data: Product[];
  constructor(private _service: ProductService) { // injection de service
  }

  ngOnInit() {

    this.data = this._service.getAllProduxts();
  }

}
