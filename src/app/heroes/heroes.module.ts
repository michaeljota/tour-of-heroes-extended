import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesMaterialModule } from './heroes-material.module';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  imports: [CommonModule, HeroesMaterialModule, HeroesRoutingModule],
  declarations: [],
})
export class HeroesModule {}
