import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  selectedImage = '';

  ngOnInit() {
    this.selectedImage = this.product.image;
  }

  setImage(img: string) {
    this.selectedImage = img;
  }

  openKaspi() {
    window.open(this.product.link, '_blank');
  }

  shareWhatsApp() {
    const text = `Check out this product: ${this.product.link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  stars(): number[] {
    const full = Math.round(this.product.rating);
    return Array.from({ length: 5 }, (_, i) => (i < full ? 1 : 0));
  }

@Output() delete = new EventEmitter<number>();

likesCount = 0;
animate = false;

like() {
  this.likesCount++;

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
