import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewComponent } from './add-new/add-new.component';
import { NewViewAllComponent } from './new-view-all/new-view-all.component';
import { RouterModule, Routes } from '@angular/router';

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
    NewViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
