import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { PRODUCTS } from '../../data/products';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = PRODUCTS;


  minPrice = 0;
maxPrice = 1500000;

selectedMinPrice = this.minPrice;
selectedMaxPrice = this.maxPrice;
}