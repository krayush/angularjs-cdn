import { NgModule } from '@angular/core';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

@NgModule({
    imports: [
        CrisisCenterRoutingModule
    ],
    exports: [],
    declarations: [
        CrisisListComponent,
        CrisisDetailComponent,
        CrisisCenterHomeComponent,
        CrisisCenterComponent
    ]
})
export class CrisisCenterModule { }