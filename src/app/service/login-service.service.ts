import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginServiceService {
  private usernameVal = new BehaviorSubject<String>("Test");
  currentMessage = this.usernameVal.asObservable();
  constructor() { }
  changeUsername(name: String) {
    this.usernameVal.next(name)
  }
}
