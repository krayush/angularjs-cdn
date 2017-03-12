import { Routes } from '@angular/router';
import { Module404Component } from '../components/module-404/module-404-component';
export class RoutesInfo {
    private routingConfig: Routes;
    private sidebarConfig = {
        'dashboard': {
            'displayName': 'Dashboard',
            'accessKey': '',
            'routingConfig': {
                'path': '',
                'redirectTo': 'dashboard',
                'pathMatch': 'full'
            }
        },
        'crisis': {
            'displayName': 'CRISIS',
            'accessKey': '',
            'routingConfig': {
                'path': 'crisis-center',
                'loadChildren': 'app/components/crisis-center/crisis-center.module#CrisisCenterModule'
            }
        },
        'events': {
            'displayName': 'EVENTS',
            'accessKey': '',
            'routingConfig': {
                'path': 'events',
                'loadChildren': 'app/components/events/events.module#EventsAppModule'
            }
        },
        'module404': {
            'routingConfig': {
                'path': '**',
                'component': Module404Component
            }
        }
    };
    private modules: any[] = [{
        'label': 'DASHBOARD',
        'icon': 'dashboard',
        'moduleId': 'dashboard',
        'accessKey': 'DASHBOARD'
    }, {
        'label': 'SHIPMENTS',
        'icon': 'shipments',
        'accessKey': 'SHIPMENTS',
        // If this is not defined, nothing will happen on icon click
        'defaultModuleId': 'crisis',
        'sections': [{
            'label': 'View Shipments',
            'tabs': [
                'crisis'
            ]
        }, {
            'moduleId': "events"
        }]
    }, {
        'label': 'EVENTS',
        'icon': 'inbound',
        'moduleId': 'events',
        'accessKey': 'INBOUND'
    }];
    getRoutingConfig() {
        this.routingConfig = [];
        let moduleIds = Object.keys(this.sidebarConfig);
        moduleIds.forEach((key) => {
            this.routingConfig.push(this.sidebarConfig[key].routingConfig);
        });
        return this.routingConfig;
    }
    getSidebarConfig() {
        var self = this;
        self.modules.map(function(module) {
            if(module.moduleId) {
                module.config = self.sidebarConfig[module.moduleId];
            } else {
                if(module.defaultModuleId) {
                    module.config = self.sidebarConfig[module.defaultModuleId];
                }
                module.sections.map(function (section) {
                    if(section.moduleId) {
                        section.config = self.sidebarConfig[section.moduleId];
                    } else {
                        let tabs = [];
                        section.tabs.map(function (moduleId) {
                            tabs.push({
                                moduleId: moduleId,
                                config: self.sidebarConfig[moduleId]
                            });
                        });
                        section.tabs = tabs;
                    }
                });
            }
        });
        return this.modules;
    }
}