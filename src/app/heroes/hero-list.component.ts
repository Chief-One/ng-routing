import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { HeroService, Hero } from "app/heroes/hero.service";
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  template: `
  <h2>HEROES</h2>
  <ul class="items">
    <li *ngFor="let hero of heroes"
      [class.selected]="isSelected(hero)"
      (click)="onSelect(hero)">
      <span class="badge">{{ hero.id }}</span> {{ hero.name }}
    </li>
  </ul>

  <button routerLink="/sidekicks">Go to sidekicks</button>
`
})
export class HeroListComponent {
  heroes = this.service.heroes;
  private selectedId: string;

  constructor(
    private router: Router,
    private service: HeroService,
    private route: ActivatedRoute
  ) { }

  onSelect(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }

  isSelected(hero: Hero) { 
    return hero.id == this.selectedId; 
  }

  ngOnInit() {
    this.selectedId = this.route.snapshot.paramMap.get('id');
  }
}