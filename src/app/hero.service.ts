import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class HeroService {
  heroes: Observable<any[]>

  constructor(private messageService: MessageService, private dbs: AngularFireDatabase) { }

  getfire():Observable<any[]>{
    this.heroes = this.dbs.list<Hero>('Kahramanlar').valueChanges()
    return this.heroes
  }
  

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
  // Todo: send the message _after_ fetching the hero
    //this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
