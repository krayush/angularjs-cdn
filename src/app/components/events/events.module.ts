import { EventListComponent }  from './event-list/event-list.component';
import { NgModule } from '@angular/core';
import { EventsRoutingModule } from './events-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        EventsRoutingModule
    ],
    exports: [],
    declarations: [
        EventListComponent
    ]
})

export class EventsAppModule {}