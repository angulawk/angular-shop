import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[]

  constructor() {
    this.products = [
      new Product(
        'NICEHAT',
        'Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket', 
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Accessories', 'Hats'],
        294.99
      )
    ]
  }
}
