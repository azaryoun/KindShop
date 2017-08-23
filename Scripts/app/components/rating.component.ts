import { Component, Input } from '@angular/core'


@Component({
    selector: 'rating',
    templateUrl: 'html/components/rating.component.html'
})
export class RatingComponent {
   
    @Input() public rating: number = 0;
    @Input('numOfReviews') public ReviewsNo: number = 0;

   
    public onClick(ratingValue: number):void {
        this.rating = ratingValue ;
    }

}