import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PRODUCTS } from '../../data/products';
import { Input } from '@angular/core';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = PRODUCTS;

  @Input() categoryId!: number;

  get filteredProducts() {
    return this.products.filter(p => p.categoryId === this.categoryId);
  }
  
  deleteProduct(id: number) {
  this.products = this.products.filter(p => p.id !== id);
}
}