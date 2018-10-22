import { Injectable } from '@angular/core'

import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'

const fakeLogin = {
  user: 'goku',
  password: 'gohan',
  logged: false
}

@Injectable()
export class AuthService {

  constructor() { }

  login(data): Observable<any> {
    const { user, password } = data
    if (user !== fakeLogin.user || password !== fakeLogin.password) return of(false)

    fakeLogin.logged = true
    return of(true)
  }

  get isLogged() { return fakeLogin.logged }
}
