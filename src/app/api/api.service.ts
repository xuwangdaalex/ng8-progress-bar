import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable, BehaviorSubject } from 'rxjs';

export interface Pb {
  buttons: array;
  bars: array;
  limit: number;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private pbApi = "http://pb-api.herokuapp.com/bars";

  constructor(private http: HttpClient) {}

  getPb(){
    return this.http.get(this.pbApi)
  }
}
