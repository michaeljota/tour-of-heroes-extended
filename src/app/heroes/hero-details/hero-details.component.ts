import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.form = this.builder.group(new Hero());

    this.hero = this.route.params.pipe(
      pluck<{}, string>('id'),
      mergeMap((id) => this.heroService.get(id)),
      tap(hero => this.form.patchValue(hero)),
    );
  }

  save() {
    const hero: Hero = this.form.getRawValue();
    this.heroService.update(hero.id, hero).toPromise();
  }

  async delete() {
    const hero: Hero = this.form.getRawValue();
    await this.heroService.delete(hero.id).toPromise();
    this.router.navigate(['heroes']);
  }
}
