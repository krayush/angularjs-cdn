import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <div>Compose a message</div>
        <button (click)='closePopup()'></button>
    `
})

export class MessageComponent {
    constructor(private router: Router) {

    }
    closePopup() {
        // Providing a `null` value to the named outlet
        // clears the contents of the named outlet
        this.router.navigate([{ outlets: { popup: null }}]);
    }
}