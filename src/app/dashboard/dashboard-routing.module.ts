import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const appRoutes: Routes = [{
    path: 'dashboard',
    component: DashboardComponent
}];
@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class DashboardRoutingModule {}