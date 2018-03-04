import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesMaterialModule } from './heroes-material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesStoreModule } from './heroes-store.module';

import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HeroService } from './hero.service';
import { HeroDetailsDispatcher } from './hero-details/hero-details.actions';
import { HeroesDispatcher } from './heroes/heroes.actions';

@NgModule({
  imports: [
    CommonModule,
    HeroesMaterialModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
    HeroesStoreModule,
  ],
  declarations: [HeroDetailsComponent, HeroesComponent],
  providers: [HeroService, HeroDetailsDispatcher, HeroesDispatcher],
})
export class HeroesModule {}
