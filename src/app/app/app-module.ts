import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing-module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
=======
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing-module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: []

>>>>>>> c9ec29d (update data)
})
export class AppModule { }
