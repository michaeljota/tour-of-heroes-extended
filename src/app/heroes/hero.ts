export class Hero {
  id: string = undefined;
  name: string = undefined;

  constructor(hero: Partial<Hero> = {}) {
    Object.assign(this, hero);
  }
}
