import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RepertoiresListComponent} from "./repertoires-list/repertoires-list.component";
import {TicketFormComponent} from "./ticket-form/ticket-form.component";
import {RepertoireItemComponent} from "./repertoires-list/repertoire-item/repertoire-item.component";

const routes: Routes = [
  { path: '', redirectTo: '/repertoires', pathMatch: 'full' },
  { path: 'tickets', component: TicketFormComponent },
  {
    path: 'repertoires',
    component: RepertoiresListComponent,
    children: [
      { path: 'overview', component: RepertoireItemComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [RepertoiresListComponent, RepertoireItemComponent, TicketFormComponent]
