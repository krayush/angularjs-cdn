import { Component } from "@angular/core";
import { RoutesInfo } from '../../resources/routes';

@Component ({
    moduleId: module.id,
    selector: 'sidebar',
    templateUrl: "./sidebar.component.html",
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
    public routesInfo: any[];
    constructor(routesInfo: RoutesInfo) {
        this.routesInfo = <any>routesInfo.getSidebarConfig();
    }
}