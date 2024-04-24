import { Component } from '@angular/core';
import {Category} from "../models/Category";
import {categories} from "../models/Category";
import {CategoryService} from "../service/category.service";
@Component({
  selector: 'app-menu',  
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'})
export class MenuComponent {  
  categories!: Category[];
  currCat : string | undefined;
  Show(category: string) {    
    this.currCat = category;
  }
  constructor(private categoryService:CategoryService) {  }
  ngOnInit():void {
    this.categoryService.getCategories().subscribe((data)=>{      
      this.categories = data;
    });  }
}