import { Component } from '@angular/core';

import { ProductService } from './products/product.service';

@Component({
  selector: 'pos-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ ProductService ]
})

export class AppComponent {
    pageTitle: string = 'Demo Store Admin';
    userName: string = 'Mike Hohne';
}
