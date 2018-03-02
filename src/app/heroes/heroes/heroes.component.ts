import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators';

import { AppState } from '../../app-store.module';

import { Hero } from '../hero';

import { HeroesActions } from './heroes.actions';
import { selectHeroesList } from './heroes.selectors';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  public heroes: Observable<ReadonlyArray<Hero>>;

  constructor(
    private readonly store: Store<AppState>,
    private readonly actions: HeroesActions,
  ) {}

  ngOnInit() {
    this.store.dispatch(this.actions.load());
    this.heroes = this.store.select(selectHeroesList).pipe(startWith([]));
  }
}
