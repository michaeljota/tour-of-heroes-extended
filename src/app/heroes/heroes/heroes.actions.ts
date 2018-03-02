import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Hero } from '../hero';

@Injectable()
export class HeroesActions {
  static readonly Load = '[Heroes] Load';
  static readonly LoadSuccess = '[Heroes] Load Success';
  static readonly LoadFail = '[Heroes] Load Fail';

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

