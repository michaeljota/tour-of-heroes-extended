import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, switchMap } from 'rxjs/operators';

import { HeroService } from './../shared/hero.service';

import { HeroesActions } from './heroes.actions';
import { HeroesDispatcher } from './heroes.dispatcher';

@Injectable()
export class HeroesEffects {
  constructor(
    private readonly actions: Actions,
    private readonly dispatcher: HeroesDispatcher,
    private readonly heroService: HeroService,
  ) {}

  @Effect()
  public readonly getHeroes: Observable<Action> = this.actions.pipe(
    ofType(HeroesActions.Load),
    switchMap(() => this.heroService.getAll()),
    map(heroes => this.dispatcher.success(heroes)),
  );
}
