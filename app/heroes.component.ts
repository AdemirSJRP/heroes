import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent],
  templateUrl: 'app/heroes.component.html'
})
export class HeroesComponent implements OnInit {

  constructor(private _heroService: HeroService, private _router: Router) { }

  title: string = "List of Heroes";
  selectedHero: Hero;
  heroes: Hero[];

  ngOnInit() {
    console.log('carregando heroes...');
    this._heroService.getHeroes().then((heroes) =>{
      this.heroes = heroes;
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail():void{
    this._router.navigate(['/detail',this.selectedHero.id]);
  }
}

