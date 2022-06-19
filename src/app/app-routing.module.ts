import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RepertoiresListComponent} from "./repertoires-list/repertoires-list.component";
import {TicketFormComponent} from "./ticket-form/ticket-form.component";

const routes: Routes = [
  { path: '', component: RepertoiresListComponent },
  { path: 'tickets', component: TicketFormComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ]
})

export class AppRoutingModule { }
