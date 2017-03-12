import { Component } from "@angular/core";
import { RoutesInfo } from '../../resources/routes';
import { Router } from "@angular/router";

@Component ({
    moduleId: module.id,
    selector: 'sidebar',
    templateUrl: "./sidebar.component.html",
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
    public routesInfo: any[];
    constructor(routesInfo: RoutesInfo, private router: Router) {
        this.routesInfo = <any[]>routesInfo.getSidebarConfig();
    }
    loadBaseModule(route) {
        if(route.moduleId) {
            let routingConfig = route.config.routingConfig;
            this.router.navigate(['/' + routingConfig.path])
        } else if(route.defaultModuleId) {
            this.router.navigate(['/' + route.config.routingConfig.path]);
        }
    }
}