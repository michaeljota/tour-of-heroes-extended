import { Hero } from './../hero';

import { HeroesActionType, HeroesActions } from './heroes.actions';

export class HeroesState {
  public readonly list: ReadonlyArray<Hero> = [];
}

/**
 * @type {ActionReducer<HeroesState, HeroesActionType>}
 */
export function heroesReducer(
  state: HeroesState = new HeroesState(),
  action: HeroesActionType,
) {
  switch (action.type) {
    case HeroesActions.LoadSuccess:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
