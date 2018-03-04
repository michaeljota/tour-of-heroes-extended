import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Hero } from '../hero';

export enum HeroesActions {
  Load = '[Heroes] Load',
  LoadSuccess = '[Heroes] Load Success',
  LoadFail = '[Heroes] Load Fail',
}

@Injectable()
export class HeroesDispatcher {

  public load() {
    return new LoadHeroes();
  }

  public success(heroes: ReadonlyArray<Hero>) {
    return new LoadHeroesSuccess(heroes);
  }
}

export type HeroesActionType = LoadHeroes | LoadHeroesSuccess | LoadHeroesFail;

class LoadHeroes implements Action {
  public readonly type = HeroesActions.Load;
}

class LoadHeroesSuccess implements Action {
  public readonly type = HeroesActions.LoadSuccess;
  constructor(public readonly payload: ReadonlyArray<Hero>) {}
}

class LoadHeroesFail implements Action {
  public readonly type = HeroesActions.LoadFail;
  public readonly payload: ReadonlyArray<Hero> = [];
}

