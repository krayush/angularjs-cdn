import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleNotFoundComponent } from './components/modulenotfound/module-not-found.component';
import { AuthGuard } from './gaurds/auth-guard.service';
import { MessageComponent } from './components/message/message.component';
import { DebugComponent } from './components/debug/debug.component'
import { CustomPreloadStrategy } from './preload-strategy/custom-preload-strategy';

const appRoutes: Routes = [{
    path: 'debug',
    component: DebugComponent
}, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
}, {
    path: 'compose',
    component: MessageComponent,
    outlet: 'popup'
}, {
    path: 'crisis-center',
    loadChildren: 'app/components/crisis-center/crisis-center.module#CrisisCenterModule',
    canLoad: [AuthGuard]
}, {
    path: 'events',
    loadChildren: 'app/components/events/events.module#EventsAppModule',
    //data: {preload: true}
},{
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
