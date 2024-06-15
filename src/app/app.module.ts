import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    BrowserModule,
    ProductComponent
  ],
  providers: [ProductService]
})
export class AppModule { }
