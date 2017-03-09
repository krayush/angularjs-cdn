import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { AppRoutingModule } from './app-routing.module';
import { ModuleNotFoundComponent } from './components/modulenotfound/module-not-found.component';
import { DashboardModule } from './components/dashboard/dashboard.module';

@NgModule({
    imports:      [ BrowserModule, CommonModule, FormsModule, HttpModule,
        DashboardModule,
        AppRoutingModule
    ],
    declarations: [ AppComponent, ModuleNotFoundComponent],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
