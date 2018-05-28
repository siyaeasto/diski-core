import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as auth from '../actions/auth.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  constructor(
    private authService: AuthService,
    private actions$: Actions
  ) { }

  @Effect() login$ = this.actions$
      .ofType(auth.LOGIN).pipe(
      switchMap(payload => this.authService.login(payload)
        // If successful, dispatch success action with result
        .map(res => ({ type: auth.LOGIN_SUCCESS, payload: res.json() }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: auth.LOGIN_FAIL}))
      )
      );

      @Effect() logout$ = this.actions$
      .ofType(auth.LOGOUT).pipe(
      switchMap(payload => this.authService.logout()
        // If successful, dispatch success action with result
        .map(res => ({ type: auth.LOGOUT_SUCCESS, payload: res }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: auth.LOGOUT_FAIL}))
      )
      );
}