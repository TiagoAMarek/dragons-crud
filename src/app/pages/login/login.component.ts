import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from "@angular/router"

import { AuthService } from '@app/api/auth.service'

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginPage {
  private loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  private error: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  get f() { return this.loginForm.controls }

  login() {
    if(!this.loginForm.valid) return

    this.authService.login(this.loginForm.value)
      .subscribe(status => {
        if (status) this.router.navigate(['/list'])
        else this.error = true
      })
  }
}
