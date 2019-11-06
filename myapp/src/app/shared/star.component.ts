import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

    starWidth;

    @Input() rating;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 6;
    }
}
