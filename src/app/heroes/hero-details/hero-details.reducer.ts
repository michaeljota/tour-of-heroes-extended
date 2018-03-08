import { Hero } from '././../shared/hero.model';

import { HeroActionType, HeroDetailsActions } from './hero-details.actions';

export class HeroDetailsState {
  public readonly hero: Readonly<Hero> = new Hero();
}

/**
 * @type {ActionReducer<HeroDetailsState,HeroActionType>}
 */
export function heroDetailsReducer(
  state: HeroDetailsState = new HeroDetailsState(),
  action: HeroActionType,
): HeroDetailsState {
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
}
