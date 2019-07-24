import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }
  addData(name,subject,message,email) {
    const obj = {name,subject,message,email};
    this
        .http
        .post(`${this.url}/add`, obj)
        .subscribe(res => console.log(res));
}
getData() {
  return(
  this
      .http
      .get(`${this.url}/View`)
  );
}
up_data(name,city, password,address,email, id) {

  const obj = {
      name: name,
      city: city,
      password: password,
      address:address,
      email:email
    };
  this
    .http
    .post(`${this.url}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}
delData(id) {
  return this.http.get(`${this.url}/delete/${id}`).subscribe();
}
}
