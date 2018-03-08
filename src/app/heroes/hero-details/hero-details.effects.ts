import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { HeroService } from './../shared/hero.service';

import {
  HeroDetailsActions,
  HeroActionType,
  LoadHero,
  SaveHero,
  DeleteHero,
} from './hero-details.actions';
import { HeroDetailsDispatcher } from './hero-details.dispatcher';

@Injectable()
export class HeroDetailsEffects {
  constructor(
    private readonly actions: Actions,
    private readonly heroService: HeroService,
    private readonly dispatcher: HeroDetailsDispatcher,
  ) {}

  @Effect()
  public readonly getHero = this.actions.pipe(
    ofType<HeroActionType>(HeroDetailsActions.Load),
    switchMap((action: LoadHero) => this.heroService.get(action.payload)),
    map(hero => this.dispatcher.loadSuccess(hero)),
  );

  @Effect({ dispatch: false })
  public readonly saveHero = this.actions.pipe(
    ofType(HeroDetailsActions.Save),
    switchMap((action: SaveHero) =>
      this.heroService.update(action.payload.id, action.payload),
    ),
    // TODO: Find a way to dispach a load action with the current hero ID.
  );

  @Effect({ dispatch: false })
  public readonly deleteHero = this.actions.pipe(
    ofType(HeroDetailsActions.Delete),
    switchMap((action: DeleteHero) => this.heroService.delete(action.payload)),
  );
}
