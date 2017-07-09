import { Injectable } from '@angular/core';

import { IProduct } from './product';

@Injectable()
export class ProductService {

  getProducts(): IProduct[] {
      return [
      {
          "productId": 1,
          "productName": "Leaf Rake",
          "isActive": false,
          "quantity" : 19,
          "description": 'Rake for leaves',
          "price": 19.95,
          "dateCreated": Date.now(),
          "feedback": 3.2,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      },
      {
          "productId": 2,
          "productName": "Garden Cart",
          "isActive": false,
          "releaseDate": "March 18, 2016",
          "quantity" : 13,
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "dateCreated": Date.now(),
          "feedback": 4.2,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      },
      {
          "productId": 5,
          "productName": "Hammer",
          "isActive": true,
          "releaseDate": "May 21, 2016",
          "quantity" : 41,
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "dateCreated": Date.now(),
          "feedback": 4.8,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
      },
      {
          "productId": 8,
          "productName": "Saw",
          "isActive": true,
          "releaseDate": "May 15, 2016",
          "quantity" : 109,
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "dateCreated": Date.now(),
          "feedback": 3.7,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
      },
      {
          "productId": 10,
          "productName": "Video Game Controller",
          "isActive": false,
          "releaseDate": "October 15, 2015",
          "quantity" : 900,
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "dateCreated": Date.now(),
          "feedback": 4.6,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
      }
    ]
  }
}
