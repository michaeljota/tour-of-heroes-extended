import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import { HeroService } from './../hero.service';

import {
  HeroDetailsActions,
  LoadHero,
  SaveHero,
  DeleteHero,
} from './hero-details.actions';

@Injectable()
export class HeroDetailsEffects {
  constructor(
    private readonly actions: Actions,
    private readonly heroService: HeroService,
    private readonly heroDetailsActions: HeroDetailsActions,
  ) {}

  @Effect()
  public readonly getHero: Observable<Action> = this.actions.pipe(
    ofType(HeroDetailsActions.Load),
    switchMap((action: LoadHero) => this.heroService.get(action.payload)),
    map(hero => this.heroDetailsActions.loadSuccess(hero)),
  );

  @Effect({ dispatch: false })
  public readonly saveHero: Observable<void> = this.actions.pipe(
    ofType(HeroDetailsActions.Save),
    switchMap((action: SaveHero) =>
      this.heroService.update(action.payload.id, action.payload),
    ),
    // TODO: Find a way to dispach a load action with the current hero ID.
  );

  @Effect({ dispatch: false })
  public readonly deleteHero: Observable<void> = this.actions.pipe(
    ofType(HeroDetailsActions.Delete),
    switchMap((action: DeleteHero) => this.heroService.delete(action.payload)),
  );
}
