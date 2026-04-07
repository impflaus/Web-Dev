import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { PRODUCTS } from '../../data/products';
import { Output, EventEmitter } from '@angular/core';
import { EventInfoWrapper } from '@angular/core/primitives/event-dispatch';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent, Output, EventEmitter],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = PRODUCTS;

  ad

}