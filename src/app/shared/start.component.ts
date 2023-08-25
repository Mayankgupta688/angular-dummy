import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 0;
    @Output() notifyRatingClicked: EventEmitter<string> = new EventEmitter<string>();
    cropWidth = 75;

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75 / 5;
    }

    ratingClicked() {
        console.log(`The ${this.rating} rating has been clicked...`)
        this.notifyRatingClicked.emit(`Clicked star rating is ${this.rating}`);
    }
}