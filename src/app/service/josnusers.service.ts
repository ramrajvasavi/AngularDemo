import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class JosnusersService {

  constructor(private http: Http) { }

  getUsers(): Observable <any>{
    return this.http.get('https://reqres.in/api/users').map(response => response.json().data)
    .catch((err:Response|any)=>{
      return Observable.throw(err.statusText);
    });
    }

}
