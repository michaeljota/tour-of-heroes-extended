import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  private readonly api = 'api/heroes';

  constructor(protected readonly _http: HttpClient) {}

  /**
   * Calls the server with a `get` request to get all the heroes.
   */
  public getAll(): Observable<Hero[]> {
    return this._http
      .get<Hero[]>(this.api)
      .pipe(catchError(this.handleError('getAllHeroes', [])));
  }

  /**
   * Calls the server with a `post` request to create a hero using the given
   * parameters.
   *
   * @param hero The data of the hero to be created.
   */
  public create(hero: Hero): Observable<Hero> {
    return this._http
      .post<Hero>(this.api, hero)
      .pipe(catchError(this.handleError('createHero', new Hero())));
  }

  /**
   * Calls the server with a `get` request to get a hero using the given id.
   *
   * @param id The id of the hero to be retrieved.
   */
  public get(id: string): Observable<Hero> {
    return this._http.get<Hero>(`${this.api}/${id}`).pipe(
      catchError(this.handleError('getHero', new Hero())),
    );
  }

  /**
   * Calls the server with a `put` request to update a hero using the given
   * parameters.
   *
   * @param id: The hero id to be updated.
   * @param hero The data of the hero to be updated with.
   */
  public update(id: string, hero: Hero): Observable<void> {
    return this._http.put<void>(`${this.api}/${id}`, hero).pipe(
      catchError(this.handleError('updateHero')),
    );
  }

  /**
   * Calls the server with a `delete` request to delete a hero using the id.
   *
   * @param id The hero id to be deleted.
   */
  public delete(id: string): Observable<void> {
    return this._http.delete<void>(`${this.api}/${id}`).pipe(
      catchError(this.handleError('deleteHero')),
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T = void>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
