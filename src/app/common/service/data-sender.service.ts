import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataSenderService {

  correlationId: number;

  constructor(private http: HttpClient) {

  }

  public createPurchase(): Observable<any> {
    return this.http.post<any>('http://localhost:8080/purchase/', null)
      .pipe();
  }
}
