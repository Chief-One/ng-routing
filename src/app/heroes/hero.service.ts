import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";



@Injectable()
export class HeroService {
  public heroes = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan')
  ];

  constructor() { }

  getHero(id: string): Hero {
    return this.heroes.filter(x => x.id == id)[0];
  }
}

export class Hero {
  constructor(public id, public name) {
  }
}