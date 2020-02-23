import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  myMethod:any;

  constructor() {
    this.myMethod = this.myMethodBehaviorSubject.asObservable();
   }
  private myMethodBehaviorSubject = new BehaviorSubject<any>(name);

  sendData(name){
  this.myMethodBehaviorSubject.next(name);
  }
}
