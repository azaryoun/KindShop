import {Injectable} from '@angular/core';
import {Product2} from './../models/product2'

@Injectable()
export class Product2Service {
    public getProducts(): Product2[] {
       // return [];
        return [
            {
                imageUrl: "http://loremflickr.com/150/150?random=1",
                productName:"Prodcut 1",
                releasedDate: new Date(2016, 5, 30),
                description: "C212ras sit amet nibh libero, in gravida... ",
                rating: 4,
                numOfReviews: 6
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: new Date(), 
                description: "weee sit amet nibh libero, in gravida... ",
                rating: 2,
                numOfReviews: 4
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releasedDate: new Date(2016, 1, 10),
                description: "Cras dsdsd amet nibh libero, in gravida... ",
                rating: 5,
                numOfReviews: 2
            }
        ];
    }


}
