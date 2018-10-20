import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import ListPage from '@app/pages/list/list.component'
import LoginPage from '@app/pages/login/login.component'
import RegisterPage from '@app/pages/register/register.component'
import Header from '@app/components/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    ListPage,
    Header,
    RegisterPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
