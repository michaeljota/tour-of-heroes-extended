import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { pluck, mergeMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  public hero: Observable<Hero>;

  constructor(
    private readonly heroService: HeroService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.hero = this.route.params.pipe(
      pluck('id'),
      mergeMap((id: string) => this.heroService.get(id)),
    );
  }
}
