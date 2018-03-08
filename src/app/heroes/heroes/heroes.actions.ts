import { Action } from '@ngrx/store';

import { Hero } from '../hero';

export enum HeroesActions {
  Load = '[Heroes] Load',
  LoadSuccess = '[Heroes] Load Success',
  LoadFail = '[Heroes] Load Fail',
}

export type HeroesActionType = LoadHeroes | LoadHeroesSuccess | LoadHeroesFail;

export class LoadHeroes implements Action {
  public readonly type = HeroesActions.Load;
}

export class LoadHeroesSuccess implements Action {
  public readonly type = HeroesActions.LoadSuccess;
  constructor(public readonly payload: ReadonlyArray<Hero>) {}
}

export class LoadHeroesFail implements Action {
  public readonly type = HeroesActions.LoadFail;
  public readonly payload: ReadonlyArray<Hero> = [];
}

