import { Component,Input } from '@angular/core'
import { Product2Service} from './../services/product2.service'
import {Product2} from './../models/product2'
@Component({
    selector: 'products',
    templateUrl: 'html/components/products.component.html'
})
export class ProductsComponent {
    public products:Product2[];
    constructor(productService: Product2Service) {
        this.products = productService.getProducts();
       // this.products = null; 
    }


}