import {Component,Input} from '@angular/core'
import {Product2} from './../models/product2'

@Component({
    selector: 'product2',
    templateUrl: 'html/components/product2.component.html'
})
export class Product2Component {
    @Input() public product: Product2;
}