import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from "@angular/router"
import { DragonsService } from '@app/api/dragons.service'

@Component({
  selector: 'register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterPage {
  private registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  })
  private isLoading: Boolean = false

  constructor(
    private dragonApi: DragonsService,
    private router: Router
  ) { }

  get f() { return this.registerForm.controls }

  registerDragon() {
    if(!this.registerForm.valid) return
    this.isLoading = true

    this.dragonApi.registerDragon(this.registerForm.value)
      .subscribe(() => this.router.navigate(['/list']))
  }
}
