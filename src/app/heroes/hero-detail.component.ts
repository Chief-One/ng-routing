import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService, Hero } from "app/heroes/hero.service";

@Component({
  template: `
  <h2>HEROES</h2>
  <div *ngIf="hero">
    <h3>"{{ hero.name }}"</h3>
    <div>
      <label>Id: </label>{{ hero.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoHeroes()">Back</button>
    </p>
  </div>
  `
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.hero = this.service.getHero(id);
  }

  gotoHeroes() {
    let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }
}
