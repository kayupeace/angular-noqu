import { Injectable } from '@angular/core';
import { Hero } from '../../modules/hero';
import { HEROES} from '../../modules/mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class HeroService {
  private heroesUrl = 'http://127.0.0.1:5000/api/heroes';  // URL to web api

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // return of(HEROES);
     return this.http.get<Hero[]>(this.heroesUrl);
  }
  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
