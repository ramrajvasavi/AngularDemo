import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class JosnusersService {
 
  constructor(private http: Http) {
  alert("This is json service");  
  }
  getUsers(dataurl): Observable <any>{
    return this.http.get(dataurl).map(response => response.json().data)
    .catch((err:Response|any)=>{
      return Observable.throw(err.statusText);
    });
  }

  getQuote(quoteurl): Observable <any>{
    return this.http.get(quoteurl).map(response => response.json().contents)
    .catch((err: Response|any)=>{
      return Observable.throw(err.statusText);
    });
  }
  //new function
  getFavQuotes(fav) {
    return fav;
  }


}
