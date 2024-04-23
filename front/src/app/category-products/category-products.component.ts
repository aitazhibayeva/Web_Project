import {Component, Input, OnInit} from '@angular/core';
import {Product, products} from "../models/Product";
import {categories, Category} from "../models/Category";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../service/products.service";
@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit{
  category_id!:string;
  @Input() category: string | undefined
  products: Product[] = products;
  categories: Category[] = categories;
  deleteFunc(productid:number){
    this.products=this.products.filter(p=>p.id!==productid);
  }
  constructor(private route: ActivatedRoute,
              private productService: ProductService) {
  }
  ngOnInit():void {
    this.category_id = this.route.snapshot.params['id'];
    this.productService.getCategoryProducts(this.category_id).subscribe((data)=>{
      this.products = data;
    });
  }
}