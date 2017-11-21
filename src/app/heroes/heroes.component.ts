import { Component, OnInit } from '@angular/core';
import { Hero } from '../../modules/hero';
import { HEROES} from '../../modules/mock-heroes';
import { HeroService} from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  // heroes = HEROES;
  heroes: Hero[];
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  constructor(private heroService: HeroService) {
  }
  ngOnInit() {
    this.getHeroes();
  }
}
