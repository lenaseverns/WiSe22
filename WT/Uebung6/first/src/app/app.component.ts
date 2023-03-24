import { Component, OnInit } from '@angular/core';
import { MyService } from '../app/shared/members.service';


@Component({
  selector: 'htw-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MainComponent implements OnInit {
  members: any ;

  constructor(private myService: MyService) { }

  ngOnInit(): void {
    this.members = this.myService.getMembers();
    console.log(this.members)
  }
}