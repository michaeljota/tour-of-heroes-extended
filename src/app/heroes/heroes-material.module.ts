import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatInputModule, MatListModule],
  exports: [MatButtonModule, MatCardModule, MatInputModule, MatListModule],
})
export class HeroesMaterialModule {}
