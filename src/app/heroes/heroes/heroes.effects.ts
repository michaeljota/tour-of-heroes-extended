import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, catchError } from 'rxjs/operators';

import { HeroService } from './../hero.service';

import { HeroesActions } from './heroes.actions';

@Injectable()
export class HeroesEffects {
  constructor(
    private readonly actions: Actions,
    private readonly heroService: HeroService,
    private readonly heroesActions: HeroesActions,
  ) {}

  @Effect()
  public readonly getHeroes: Observable<Action> = this.actions.pipe(
    ofType(HeroesActions.Load),
    switchMap(() => this.heroService.getAll()),
    map(heroes => this.heroesActions.success(heroes)),
  );
}
