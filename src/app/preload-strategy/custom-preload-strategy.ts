import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Route, PreloadingStrategy } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomPreloadStrategy implements PreloadingStrategy {
    preload(route: Route, load:() => Observable<any>): Observable<any> {
        if(route.data && route.data['preload']) {
            console.error('Loading Module: ' + route.path);
            return load();
        } else {
            return Observable.of(null);
        }
    }
}
