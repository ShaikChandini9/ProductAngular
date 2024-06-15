import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(){

    return [

      {
        "id":1,
        "name":"pen",
        "brand":"saino",
        "price":10
      },
      {
        "id":2,
        "name":"paint brushes",
        "brand":"levino",
        "price":30
      },
      {
        "id":3,
        "name":"sketches",
        "brand":"camel",
        "price":20
      },
    ];
  }
}
