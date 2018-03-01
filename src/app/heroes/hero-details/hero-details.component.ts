import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { pluck, mergeMap, tap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  public hero: Observable<Hero>;
  public form: FormGroup;

  constructor(
    private readonly builder: FormBuilder,
    private readonly heroService: HeroService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.form = this.builder.group(new Hero());

    this.hero = this.route.params.pipe(
      pluck<{}, string>('id'),
      mergeMap((id) => this.heroService.get(id)),
      tap(hero => this.form.patchValue(hero)),
    );
  }
}
