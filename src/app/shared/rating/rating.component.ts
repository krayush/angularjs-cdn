import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss']
})

export class RatingComponent implements OnChanges{
    @Input() rating: number = 4;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    ratingWidthPercentage: number;
    ngOnChanges() {
        this.ratingWidthPercentage = this.rating / 5 * 100;
    }
    onClick() {
        console.error('EMITTING');
        this.ratingClicked.emit('This is my content');
    }
}