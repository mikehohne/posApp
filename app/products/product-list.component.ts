import { Component, OnInit }  from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service'

@Component({
  selector: 'pos-products',
  moduleId: module.id,
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Store Product List';

  imageWidth: number = 50;
  imageMargin: number = 2;

  showImage: boolean = false;
  listFilter: string;

  products: IProduct[];


  constructor(private _productService: ProductService) { }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }

  onReviewClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
