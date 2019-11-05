import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    // styles: ['thead{color:skyblue}', 'td{color:green}']
    styleUrls: ['./product.componentt.css']
})

export class ProductComponent implements OnInit {
    title = '*****Products Page********';
    showTable = true;
    showImage = false;
    userText;
    products ;

    constructor(private productService: ProductService) {

    }

    ngOnInit() {
        // this.products = this.productService.getProducts();
        this.productService.getDataFromApi()
          .subscribe((data) => this.products = data);
    }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }
}
