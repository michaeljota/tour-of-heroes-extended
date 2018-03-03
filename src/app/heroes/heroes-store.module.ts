import { NgModule } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../../environments/environment';

import { HeroDetailsState, heroDetailsReducer } from './hero-details/hero-details.reducer';
import { HeroesState, heroesReducer } from './heroes/heroes.reducer';

import { HeroDetailsEffects } from './hero-details/hero-details.effects';
import { HeroesEffects } from './heroes/heroes.effects';

const STORE_NAME = 'heroes';

class HeroesFeatState {
  heroes = new HeroesState();
  details = new HeroDetailsState();
}

const heroesReducers: ActionReducerMap<HeroesFeatState> = {
  heroes: heroesReducer,
  details: heroDetailsReducer,
};

export const heroesState = createFeatureSelector<HeroesFeatState>(STORE_NAME);

const metaReducers: MetaReducer<HeroesFeatState>[] = !environment.production
  ? []
  : [];

@NgModule({
  imports: [
    StoreModule.forFeature(STORE_NAME, heroesReducers, {
      metaReducers,
      initialState: new HeroesFeatState(),
    }),
    EffectsModule.forFeature([HeroDetailsEffects, HeroesEffects]),
  ],
  declarations: [],
})
export class HeroesStoreModule {}
