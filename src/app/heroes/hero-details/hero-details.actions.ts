import { Action } from '@ngrx/store';

import { Hero } from './../shared/hero.model';

export enum HeroDetailsActions {
  Clean = '[Hero] Clean',
  Load = '[Hero] Load',
  LoadSuccess = '[Hero] Load Success',
  Save = '[Hero] Save',
  SaveSuccess = '[Hero] Save Success',
  Delete = '[Hero] Delete',
  DeleteSuccess = '[Hero] Delete Success',
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
