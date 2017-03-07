import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        DashboardRoutingModule
    ],
    exports: [],
    declarations: [
        DashboardComponent
    ]
})

export class DashboardModule {

}
