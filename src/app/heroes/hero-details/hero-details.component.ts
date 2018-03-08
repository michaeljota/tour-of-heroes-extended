import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { pluck, tap } from 'rxjs/operators';

import { AppState } from '../../app-store.module';

import { Hero } from '../hero';

import { HeroDetailsDispatcher } from './hero-details.dispatcher';
import { selectHero } from './hero-details.selectors';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  public hero: Observable<Readonly<Hero>>;
  public form: FormGroup;

  constructor(
    private readonly builder: FormBuilder,
    private readonly dispatcher: HeroDetailsDispatcher,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.form = this.builder.group(new Hero());
    this.hero = this.store
      .select(selectHero)
      .pipe(tap(hero => this.form.patchValue(hero)));

    this.route.params.pipe(pluck<{}, string>('id')).subscribe(id => {
      this.store.dispatch(this.dispatcher.load(id));
    });
  }

  save() {
    const hero: Hero = this.form.getRawValue();
    this.store.dispatch(this.dispatcher.save(hero));
    this.router.navigate(['heroes']);
  }

  delete() {
    const hero: Hero = this.form.getRawValue();
    this.store.dispatch(this.dispatcher.delete(hero.id));
    this.router.navigate(['heroes']);
  }

  return() {
    this.store.dispatch(this.dispatcher.clean());
    this.router.navigate(['heroes']);
  }
}
