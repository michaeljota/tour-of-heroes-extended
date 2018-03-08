import { Injectable } from '@angular/core';

import { Hero } from './../shared/hero.model';

import {
  CleanHero,
  LoadHero,
  LoadHeroSuccess,
  DeleteHero,
  DeleteHeroSuccess,
  SaveHero,
  SaveHeroSuccess,
} from './hero-details.actions';

@Injectable()
export class HeroDetailsDispatcher {
  public clean() {
    return new CleanHero();
  }

  public load(id: string) {
    return new LoadHero(id);
  }

  public loadSuccess(hero: Hero) {
    return new LoadHeroSuccess(hero);
  }

  public save(hero: Hero) {
    return new SaveHero(hero);
  }

  public saveSuccess() {
    return new SaveHeroSuccess();
  }

  public delete(id: string) {
    return new DeleteHero(id);
  }

  public deleteSuccess() {
    return new DeleteHeroSuccess();
  }
}
