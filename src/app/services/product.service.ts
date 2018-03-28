import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable()
export class ProductService {

  constructor() {
  }

  getAllProduxts(): Product[] {
   return [
      {code: 'P100', name: 'cafe', price: 1500},
      {code: 'P200', name: 'jus', price: 3500},
      {code: 'P300', name: 'The', price: 1000},
      {code: 'P400', name: 'Boite', price: 2500}
  ];
  }

}
