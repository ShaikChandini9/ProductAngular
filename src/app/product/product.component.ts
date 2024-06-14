import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})


export class ProductComponent {

  products:any

  constructor(){

    this.products=[

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
    ]
  }
}
