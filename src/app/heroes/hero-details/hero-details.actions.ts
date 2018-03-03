import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Hero } from '../hero';

@Injectable()
export class HeroDetailsActions {
  static readonly Clean = '[Hero] Clean';
  static readonly Load = '[Hero] Load';
  static readonly LoadSuccess = '[Hero] Load Success';
  static readonly Save = '[Hero] Save';
  static readonly SaveSuccess = '[Hero] Save Success';
  static readonly Delete = '[Hero] Delete';
  static readonly DeleteSuccess = '[Hero] Delete Success';

  public clean() {
    return new CleanHero();
  }

  public load(id: string) {
    return new LoadHero(id);
  }

  public loadSuccess(hero: Hero) {
    return new LoadHeroSuccess(hero);
  }

  public save(hero: Hero) {
    return new SaveHero(hero);
  }

  public saveSuccess() {
    return new SaveHeroSuccess();
  }

  public delete(id: string) {
    return new DeleteHero(id);
  }

  public deleteSuccess() {
    return new DeleteHeroSuccess();
  }
}

export type HeroActionType =
  | CleanHero
  | DeleteHero
  | DeleteHeroSuccess
  | LoadHero
  | LoadHeroSuccess
  | SaveHero
  | SaveHeroSuccess;

export class CleanHero implements Action {
  public readonly type = HeroDetailsActions.Clean;
}

export class LoadHero implements Action {
  public readonly type = HeroDetailsActions.Load;
  constructor(public readonly payload: string) {}
}

export class LoadHeroSuccess implements Action {
  public readonly type = HeroDetailsActions.LoadSuccess;
  constructor(public readonly payload: Readonly<Hero>) {}
}

export class SaveHero implements Action {
  public readonly type = HeroDetailsActions.Save;
  constructor(public readonly payload: Readonly<Hero>) {}
}

export class SaveHeroSuccess implements Action {
  public readonly type = HeroDetailsActions.SaveSuccess;
}

export class DeleteHero implements Action {
  public readonly type = HeroDetailsActions.Delete;
  constructor(public readonly payload: string) {}
}

export class DeleteHeroSuccess implements Action {
  public readonly type = HeroDetailsActions.DeleteSuccess;
}
