// Core Modules Section
import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';
// Routing Section
import { AppRoutingModule } from './app-routing.module';
// Component Section
import { AppComponent }  from './app.component';
import { SidebarComponent }  from './components/sidebar/sidebar.component';
import { Module404Component } from './components/module-404/module-404-component';
import { DashboardModule } from './components/dashboard/dashboard.module';
// Loading Strategies
import { CustomPreloadStrategy } from './preload-strategy/custom-preload-strategy';
// Additional Providers
import { RoutesInfo } from "./resources/routes";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        DashboardModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        SidebarComponent,
        Module404Component
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        CustomPreloadStrategy,
        RoutesInfo
    ]
})

export class AppModule { }
