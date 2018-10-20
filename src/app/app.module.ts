import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { DragonsService } from '@app/api/dragons.service'

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
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    DragonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
