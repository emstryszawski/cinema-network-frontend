import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RepertoiresListComponent} from "./repertoires-list/repertoires-list.component";
import {TicketFormComponent} from "./ticket-form/ticket-form.component";
import {RepertoireItemComponent} from "./repertoires-list/repertoire-item/repertoire-item.component";
import {SeatsFormComponent} from "./seats-form/seats-form.component";
import {CustomerFormComponent} from "./customer-form/customer-form.component";
import {BuyFormComponent} from "./buy-form/buy-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/repertoires', pathMatch: 'full' },
  { path: 'tickets', component: TicketFormComponent },
  { path: 'seats', component: SeatsFormComponent },
  { path: 'customer', component: CustomerFormComponent },
  { path: 'buy', component: BuyFormComponent },
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
