import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { FakendDatabase } from './fakend.database';

/**
 * Module configured to use the InMemoryWebApi development module of Angular.
 */
@NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakendDatabase),
  ],
})
export class FakendModule {}
