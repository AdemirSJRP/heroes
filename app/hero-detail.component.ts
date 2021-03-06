import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
    @Input() hero: Hero;
    sub: any;

    constructor(private _heroService: HeroService, private _route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            console.log('params:');
            console.log(params);
            let id = +params["id"];
            this._heroService.getHero(id).then(hero => this.hero = hero);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack():void{
        window.history.back();
    }
}

