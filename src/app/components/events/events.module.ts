import { EventListComponent }  from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component'
import { NgModule } from '@angular/core';
import { EventsRoutingModule } from './events-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from './event-filter.pipe';
import { RatingComponent } from '../../shared/rating/rating.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        EventsRoutingModule
    ],
    exports: [],
    declarations: [
        EventListComponent,
        EventDetailComponent,
        EventFilterPipe,
        RatingComponent
    ]
})

export class EventsAppModule {}