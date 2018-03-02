import { createSelector } from '@ngrx/store';

import { heroesState } from './../heroes-store.module';

export const selectHeroes = createSelector(heroesState, state => state.heroes);

export const selectHeroesList = createSelector(
  selectHeroes,
  state => state.list,
);
