import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewComponent } from './add-new/add-new.component';
import { NewViewAllComponent } from './new-view-all/new-view-all.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myRoutes : Routes=[{
  path:"",component:AddNewComponent
},
{
  path:"viewall",component:NewViewAllComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    AddNewComponent,
    NewViewAllComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
