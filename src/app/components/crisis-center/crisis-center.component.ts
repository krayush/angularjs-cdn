import {Component} from "@angular/core";

@Component({
    template: `
        <div>CRISIS CENTER</div>
        <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
        <router-outlet></router-outlet>
    `
})

export class CrisisCenterComponent {
    // <a routerLink="./" routerLinkActive="active"
    //  [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
    // This is just a way to match the exact url before adding this routerLinkActive class
    // This way it doesn't add the class for the child routes
}