import { ActionReducer } from '@ngrx/store';

import { Hero } from './../hero';

import { HeroActionType, HeroDetailsActions } from './hero-details.actions';

export class HeroDetailsState {
  public readonly hero: Readonly<Hero> = new Hero();
}

export const heroDetailsReducer: ActionReducer<
  HeroDetailsState,
  HeroActionType
> = (state = new HeroDetailsState(), action) => {
  switch (action.type) {
    case HeroDetailsActions.Clean:
      return {
        ...state,
        hero: new Hero(),
      };
    case HeroDetailsActions.LoadSuccess:
      return {
        ...state,
        hero: action.payload,
      };
    default:
      return state;
  }
};
