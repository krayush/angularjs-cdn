import {Component} from '@angular/core';

@Component({
    selector: 'debug-config',
    templateUrl: "./debug.template.html"
})

export class DebugComponent {
    constructor() {
    }

    ngAfterViewInit() {
        let bootConfig = window.localStorage.getItem("bootConfig");
        if (bootConfig) {
            this.setToTemplate(JSON.parse(bootConfig));
        }
    }

    setToTemplate(bootConfig) {
        for(let key in bootConfig){
            if(typeof bootConfig[key] === "boolean"){
                (<HTMLInputElement>document.getElementById(key)).checked = bootConfig[key];
            }else {
                (<HTMLInputElement>document.getElementById(key)).value = bootConfig[key];
            }
        }
    }

    saveDebugInfo() {
        let bootConfig = {},
            checkbox = document.querySelectorAll(".fields-container input[type=checkbox]"),
            Inputfields = document.querySelectorAll(".fields-container input[type=text]");

        for (let i = 0; i < Inputfields.length; i++) {
            bootConfig[Inputfields[i].id] = (<HTMLInputElement>Inputfields[i]).value;
        }
        for (let i = 0; i < checkbox.length; i++) {
            if ((<HTMLInputElement>checkbox[i]).checked) {
                bootConfig[checkbox[i].id] = (<HTMLInputElement>checkbox[i]).checked
            }
        }
        window.localStorage.setItem("bootConfig", JSON.stringify(bootConfig));
    }
}