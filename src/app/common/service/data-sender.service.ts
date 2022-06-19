import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataSenderService {

  constructor(private http: HttpClient) {

  }

  public createPurchase(): Observable<any> {
    return this.http.post<any>('http://localhost:8080/purchase/', null).pipe();
  }

  public addTickets(id: number, quantity: number, correlationId: number) {
    const body = JSON.stringify(
      {
        repertoireId: 1,
        cinemaId: 1,
        discountId: id,
        numberOfTickets: quantity
      })

    const headers = { 'Content-Type': 'application/json'}

    const params = new HttpParams()
      .append('correlationId', correlationId)

    console.log(body);
    return this.http.post<any>('http://localhost:8080/purchase/tickets', body, {
      headers: headers,
      params: params
    }).subscribe(response => console.log(response));
  }
}
