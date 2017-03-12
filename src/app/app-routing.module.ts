import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RoutesInfo } from "./resources/routes";

@NgModule({
    imports: [
        RouterModule.forRoot(new RoutesInfo().getRoutingConfig())
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}