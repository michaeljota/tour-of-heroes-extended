import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  public heroes: Observable<Hero[]>;

  constructor(private readonly heroService: HeroService) {}

  ngOnInit() {
    this.heroes = this.heroService.getAll();
  }
}
