import { Injectable } from '@angular/core';

import { Hero } from '../hero';

import { LoadHeroes, LoadHeroesSuccess } from './heroes.actions';

@Injectable()
export class HeroesDispatcher {

  public load() {
    return new LoadHeroes();
  }

  public success(heroes: ReadonlyArray<Hero>) {
    return new LoadHeroesSuccess(heroes);
  }
}
