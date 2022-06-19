import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Repertoire} from "../model/repertoire.model";

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {
  private readonly repertoiresUrl: string;

  constructor(private http: HttpClient) {
    this.repertoiresUrl = 'http://localhost:8080/repertoires/';
  }

  public findAllRepertoires(): Observable<Repertoire[]> {
    return this.http.get<Repertoire[]>(this.repertoiresUrl);
  }
}
