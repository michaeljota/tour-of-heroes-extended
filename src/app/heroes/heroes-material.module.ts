import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatInputModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatInputModule, MatListModule],
  exports: [MatCardModule, MatInputModule, MatListModule],
})
export class HeroesMaterialModule {}
