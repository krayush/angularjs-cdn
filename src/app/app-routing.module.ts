import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleNotFoundComponent } from './modulenotfound/module-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { MessageComponent } from './message/message.component';
import { CustomPreloadStrategy } from './custom-preload-strategy';

const appRoutes: Routes = [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
}, {
    path: 'compose',
    component: MessageComponent,
    outlet: 'popup'
}, {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module',
    canLoad: [AuthGuard]
}, {
    path: 'events',
    loadChildren: 'app/events/events.module',
    data: {preload: true}
}, {
    path: '**', component: ModuleNotFoundComponent
}];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            //preloadingStrategy: CustomPreloadStrategy
        })
    ],
    exports: [
        RouterModule
    ],
    providers: [ AuthGuard ]
})

export class AppRoutingModule {}
