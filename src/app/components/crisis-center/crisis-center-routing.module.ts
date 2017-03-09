import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { AuthGuard } from '../../gaurds/auth-guard.service';

const crisisCenterRoutes: Routes = [{
    path: '',
    component: CrisisCenterComponent,
    canActivate: [AuthGuard],
    children: [{
        path: '',
        component: CrisisListComponent,
        children: [{
            path: ':id',
            component: CrisisDetailComponent
        }, {
            path: '',
            component: CrisisCenterHomeComponent
        }]
    }]
}];

@NgModule({
    imports: [
        RouterModule.forChild(crisisCenterRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [AuthGuard]
})
export class CrisisCenterRoutingModule { }