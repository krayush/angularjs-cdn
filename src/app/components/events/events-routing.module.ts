import { EventListComponent }  from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component'
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleNotFoundComponent } from '../modulenotfound/module-not-found.component';

const appRoutes: Routes = [{
    path: "",
    //data: {preload: true}, // This is static info
    children: [{
        path: '',
        component: EventListComponent
    }, {
        path: ':id',
        component: EventDetailComponent
    }]
}];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class EventsRoutingModule {}