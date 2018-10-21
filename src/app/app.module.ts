import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { DragonsService } from '@app/api/dragons.service'
import { PaginationService } from '@app/components/pagination/pagination.service'

import ListPage from '@app/pages/list/list.component'
import LoginPage from '@app/pages/login/login.component'
import RegisterPage from '@app/pages/register/register.component'
import Header from '@app/components/header/header.component'
import { Pagination } from '@app/components/pagination/pagination.component';
import { DragonCard } from '@app/components/dragon-card/dragon-card.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    ListPage,
    Header,
    RegisterPage,
    Pagination,
    DragonCard,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    DragonsService,
    PaginationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
