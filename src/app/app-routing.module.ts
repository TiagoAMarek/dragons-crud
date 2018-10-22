import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import ListPage from '@app/pages/list/list.component'
import LoginPage from '@app/pages/login/login.component'
import RegisterPage from '@app/pages/register/register.component'
import { AuthGuard } from '@app/auth.guard'

const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'list', component: ListPage, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterPage, canActivate: [AuthGuard]},
  { path: 'update/:slug', component: RegisterPage, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
