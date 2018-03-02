import { ActionReducer } from '@ngrx/store';

import { Hero } from './../hero';

import { HeroesActionType, HeroesActions } from './heroes.actions';

export class HeroesState {
  public readonly list: ReadonlyArray<Hero> = [];
}

export const heroesReducer: ActionReducer<HeroesState, HeroesActionType> = (
  state = new HeroesState(),
  action,
) => {
  switch (action.type) {
    case HeroesActions.LoadSuccess:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
