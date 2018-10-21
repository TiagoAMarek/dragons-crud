import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import ListPage from '@app/pages/list/list.component'
import LoginPage from '@app/pages/login/login.component'
import RegisterPage from '@app/pages/register/register.component'

const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'list', component: ListPage },
  { path: 'register', component: RegisterPage },
  { path: 'update/:slug', component: RegisterPage },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
