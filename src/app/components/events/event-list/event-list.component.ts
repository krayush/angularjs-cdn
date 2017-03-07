import { Component, OnInit } from '@angular/core';
import { EventListService } from '../../../services/event-list.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss'],
    providers: [ EventListService ]
})

export class EventListComponent implements OnInit {
    showImage: boolean = true;
    searchString: string = '';
    eventList: any[] = [];
    errorMessage: string = '';
    constructor(private eventListService: EventListService, private router: Router) {}
    ngOnInit() {
        this.eventListService.getEvents().subscribe(
            events => this.eventList = events
        );
    }
    onSelect(event, code) {
        this.router.navigate(['/events', code]);
        // console.error(code)
    }
    toggleImage():void {
        this.showImage = !this.showImage;
    }
    ratingClicked(data) {
        console.error(data);
    }
}
