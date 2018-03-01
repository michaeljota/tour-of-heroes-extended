import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesMaterialModule } from './heroes-material.module';
import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroService } from './hero.service';

@NgModule({
  imports: [CommonModule, HeroesMaterialModule, HeroesRoutingModule],
  declarations: [],
  providers: [HeroService],
})
export class HeroesModule {}
