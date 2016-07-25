import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  styleUrls: ['app/app.component.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService],
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private _heroService: HeroService) { }

  title: string = "Tour of Heroes";
  selectedHero: Hero;
  heroes: Hero[];

  ngOnInit() {
    console.log('carregando heroes...');
    this._heroService.getHeroesSlowly().then((heroes) =>{
      console.log('heroes carregados...'); 
      this.heroes = heroes;
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

