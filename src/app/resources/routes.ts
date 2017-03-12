import { Routes } from '@angular/router';
import { Module404Component } from '../components/module-404/module-404-component';
export class RoutesInfo {
    private routingConfig: Routes;
    private sidebarConfig: any[] = [{
        // id needs to be unique
        id: "dashboard",
        displayName: "Dashboard",
        accessKey: "",
        routingConfig: {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
        }
    }, {
        id: "Crisis",
        displayName: "",
        accessKey: "",
        routingConfig: {
            path: 'crisis-center',
            loadChildren: 'app/components/crisis-center/crisis-center.module#CrisisCenterModule'
        }
    }, {
        id: "Events",
        displayName: "",
        accessKey: "",
        routingConfig: {
            path: 'events',
            loadChildren: 'app/components/events/events.module#EventsAppModule'
        }
    }, {
        id: "dashboard",
        hidden: true,
        routingConfig: {
            path: '**',
            component: Module404Component
        }
    }];
    getRoutingConfig() {
        this.routingConfig = [];
        this.sidebarConfig.forEach((value) => {
            this.routingConfig.push(value.routingConfig);
        });
        return this.routingConfig;
    }
    getSidebarConfig() {
        return this.sidebarConfig;
    }
}