import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { slideInDownAnimation } from '../../../animations/animations';
@Component ({
    template: '<div>DETAIL {{dataId}}</div>',
    // way to define animations
    animations: [ slideInDownAnimation ]
})

export class EventDetailComponent implements OnInit {
    dataId: any;
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';
    data = [new Hero(1, 'name'), new Hero(1, 'name1')];

    constructor(private r: Router, private activatedRoute: ActivatedRoute) {
        // console.error('routerState: ', r.routerState);
        console.error(this.data[0].name);
    }
    ngOnInit() {
        // let data:any = this.activatedRoute.params;
        // console.error(data.value);
        // console.error(this.activatedRoute.snapshot.params.id);
        this.activatedRoute.params.switchMap((param: Params)=> {
            this.dataId = param['id'];
            return Observable.of(1);
        }).subscribe(()=>{ });
    }
}

class Hero {
    constructor(public id, public name) { }
}
