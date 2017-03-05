import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'events-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    constructor(router: Router) {
        // console.error(router.config);
    }
    title:string = 'Events App';
}
