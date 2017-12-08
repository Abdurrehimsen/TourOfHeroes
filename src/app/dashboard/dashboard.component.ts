import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Observable<any[]>;
 
  constructor(private heroService: HeroService, private dbs: AngularFireDatabase) { }
 
  ngOnInit() {
    this.heroes = this.getfire();
    console.log(this.heroes)
  }

  getfire():Observable<any[]>{
    return this.dbs.list<Hero>('/Kahramanlar').valueChanges()
  }
 /*
  getHeroes(): void {
    this.heroService.getfire()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
      console.log(this.heroes)
  }*/

}
