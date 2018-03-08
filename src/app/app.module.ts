import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FakendModule } from './@fakend/fakend.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FakendModule,
    CoreModule,
    AppRoutingModule,
    AppStoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
