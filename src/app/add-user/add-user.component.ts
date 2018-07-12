import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  msg : string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(firstname, lastname, email, phone, password, dept_id,address) {
    this.msg = 'Data submited';
    console.log(this.msg);
  }
}
