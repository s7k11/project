import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  name;
  email;
  message;
  subject;
  constructor(private us: UserService) { }

  ngOnInit() {
  }
  addData() {
    this.us.addData(this.subject,this.email,this.name,this.message);}
}
