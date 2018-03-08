import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators';

import { AppState } from '../../app-store.module';

import { Hero } from './../shared/hero.model';

import { HeroesDispatcher } from './heroes.dispatcher';
import { selectHeroesList } from './heroes.selectors';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  public heroes: Observable<ReadonlyArray<Hero>>;

  constructor(
    private readonly dispatcher: HeroesDispatcher,
    private readonly store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.store.dispatch(this.dispatcher.load());
    this.heroes = this.store.select(selectHeroesList).pipe(startWith([]));
  }
}
