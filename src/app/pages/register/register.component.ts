import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from "@angular/router"

import { DragonsService } from '@app/api/dragons.service'

@Component({
  selector: 'register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterPage implements OnInit {
  private registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  })
  private isLoading: boolean = false
  private slug: string

  constructor(
    private dragonApi: DragonsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const { params } = this.activatedRoute
    params.subscribe(params => {
      const { slug } = params
      this.slug = slug

      if (slug) this.getDragon(slug)
    })
  }

  get f() { return this.registerForm.controls }

  getDragon(slug: string) {
    this.dragonApi.getDragon(slug)
      .subscribe(dragon => {
        const { name, type } = dragon
        this.registerForm.patchValue({
          name,
          type,
        })
      })
  }

  registerDragon() {
    if(!this.registerForm.valid) return
    this.isLoading = true

    this.dragonApi.registerDragon(this.registerForm.value)
      .subscribe(() => this.router.navigate(['/list']))
  }

  updateDragon() {
    if(!this.registerForm.valid) return
    this.isLoading = true

    this.dragonApi.updateDragon(this.registerForm.value, this.slug)
      .subscribe(() => this.router.navigate(['/list']))
  }
}
