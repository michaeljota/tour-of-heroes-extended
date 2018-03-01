import { InMemoryDbService } from 'angular-in-memory-web-api';

import * as data from './api';

/**
 * UUID generator. Based of the tiny uuid generator by
 * [jed](https://github.com/jed). [gist](https://gist.github.com/jed/982883).
 *
 * @param a placeholder
 */
const uuid: (a?: any) => string = function b(a) {
  return a
    ? // tslint:disable-next-line:no-bitwise
      (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
};

/**
 * An implementation of the InMemoryDbService. Holds the API data for the demo.
 */
export class FakendDatabase extends InMemoryDbService {
  /**
   * @inheritdoc
   */
  public createDb() {
    return data;
  }
  /**
   * @inheritdoc
   */
  public genId() {
    return uuid();
  }
}
