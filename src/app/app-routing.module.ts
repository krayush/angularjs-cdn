import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleNotFoundComponent } from './components/modulenotfound/module-not-found.component';

const appRoutes: Routes = [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
}, {
    path: 'events',
    loadChildren: 'app/components/events/events.module#EventsAppModule'
}, {
    path: '**', component: ModuleNotFoundComponent
}];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
