import { Component } from '@angular/core'
import {ProductService} from './../services/product.service'

@Component({
    selector: 'product',
    templateUrl: 'html/components/product.component.html'
})
export class ProductComponent {
    public products: string[];

    constructor(productService: ProductService) {
        this.products = productService.getProducts();
    }

}