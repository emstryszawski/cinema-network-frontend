import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Repertoire} from "../model/repertoire.model";
import {TicketTypeDiscount} from "../model/ticket-type-discount.model";

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {
  private readonly repertoiresUrl: string;
  private readonly ticketDiscountsUrl: string;

  constructor(private http: HttpClient) {
    this.repertoiresUrl = 'http://localhost:8080/repertoires/';
    this.ticketDiscountsUrl = 'http://localhost:8080/tickets/discounts'
  }

  public findAllRepertoires(): Observable<Repertoire[]> {
    return this.http.get<Repertoire[]>(this.repertoiresUrl);
  }

  public findAllTicketDiscounts(): Observable<TicketTypeDiscount[]> {
    return this.http.get<TicketTypeDiscount[]>(this.ticketDiscountsUrl);
  }
}
