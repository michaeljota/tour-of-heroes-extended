import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreMaterialModule } from './core-material.module';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([]), CoreMaterialModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class CoreModule {}
