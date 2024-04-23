import {Component, Input, OnInit} from '@angular/core';
import {Product, products} from "../models/Product";
import {ProductService} from "../service/products.service";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  @Input() product!: Product;
  constructor(private productService: ProductService) {
  }
  ngOnInit():void {
    this.productService.getProducts().subscribe((data)=>{
      this.products = data;
    })
  }
}