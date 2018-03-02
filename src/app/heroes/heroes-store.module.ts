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

const STORE_NAME = 'heroes';

class HeroesFeatState {}

const heroesReducers: ActionReducerMap<HeroesFeatState> = {};

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
    EffectsModule.forFeature([]),
  ],
  declarations: [],
})
export class HeroesStoreModule {}
