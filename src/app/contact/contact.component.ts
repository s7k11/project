import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
name;
email;
message;
subject;
  constructor(private us: UserService) { }

  ngOnInit() {
  }
  addData() {
    this.us.addData(this.name,this.subject,this.email,this.message);}

}
