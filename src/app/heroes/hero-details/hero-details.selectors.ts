import { createSelector } from '@ngrx/store';

import { heroesState } from './../heroes-store.module';

export const selectHeroDetails = createSelector(
  heroesState,
  state => state.details,
);

export const selectHero = createSelector(
  selectHeroDetails,
  state => state.hero,
);
