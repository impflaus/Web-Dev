import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {

  @Input({ required: true }) product!: Product;
  @Output() delete = new EventEmitter<number>();


  likesCount = 0;
  liked = false;
animate = false;

like() {
  this.likesCount++;
  this.liked = true;

  this.animate = false;
  setTimeout(() => {
    this.animate = true;
  }, 10);
}

  deleteProduct() {
    const confirmDelete = confirm('Are you sure?');

    if (confirmDelete) {
      this.delete.emit(this.product.id);
    }
  }
}