import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  members: any;

  constructor() {}

  getMembers() {
    fetch('./assets/members.json')
    .then( res => res.json() )
    .then( jsonData => {
      this.members = jsonData;
      console.log('getQuestions', this.members);

    })
    return this.members;

  }
}