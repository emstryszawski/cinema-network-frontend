import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SeatsFormComponent } from './seats-form/seats-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    routingComponents,
    SeatsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CommonModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
