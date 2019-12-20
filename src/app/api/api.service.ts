import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private pbApi = "https://pb-api.herokuapp.com/bars"

  constructor(private http: HttpClient) {}

  getPb(){
    return this.http.get(this.pbApi)
  }
}
