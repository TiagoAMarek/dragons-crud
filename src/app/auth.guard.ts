import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from '@app/api/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.auth.isLogged) {
      this.router.navigate(['/'])
      return false
    }

    return true
  }
}
