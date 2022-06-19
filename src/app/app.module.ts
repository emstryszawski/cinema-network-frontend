import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RepertoiresListComponent } from './repertoires-list/repertoires-list.component';
import { RouterModule } from "@angular/router";
import { RepertoireItemComponent } from './repertoires-list/repertoire-item/repertoire-item.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { TicketFormComponent } from './ticket-form/ticket-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RepertoiresListComponent,
    RepertoireItemComponent,
    LoginDialogComponent,
    TicketFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
