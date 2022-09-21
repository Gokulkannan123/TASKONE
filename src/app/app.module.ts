import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";
import { ChildComponent } from './child/child.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ListdetailComponent } from './listdetail/listdetail.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ListComponent } from './list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildComponent,
    UserlistComponent,
    UserdetailsComponent,
    ListdetailComponent,
    TodolistComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
