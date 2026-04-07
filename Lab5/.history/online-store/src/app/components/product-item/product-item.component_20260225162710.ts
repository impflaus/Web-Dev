import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {

  @Input({ required: true }) product!: Product;
  @Output() delete = new EventEmitter<number>();

  selectedImage = '';
  likesCount = 0;
  liked = false;
  animate = false;

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

  showShare = false;

  toggleShare() {
    this.showShare = !this.showShare;
  }

@Output() toggleFavorite = new EventEmitter<{ product: Product, liked: boolean }>();

like() {
  this.liked = !this.liked;

  if (this.liked) {
    this.likesCount++;
  } else {
    this.likesCount--;
  }

  this.toggleFavorite.emit({
    product: this.product,
    liked: this.liked
  });
}

  deleteProduct() {
    const confirmDelete = confirm('Are you sure?');
    if (confirmDelete) {
      this.delete.emit(this.product.id);
    }
  }
}