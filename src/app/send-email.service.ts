import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SendEmailService {
  sendMailUrl = `https://us-central1-tk-angular.cloudfunctions.net/httpEmail`;
  hdr: HttpHeaders = new HttpHeaders();
  httpOptions = {};

  constructor(private http: HttpClient) {
    this.hdr = this.hdr.set('Content-Type', 'application/json');
    this.httpOptions = {
      headers: this.hdr,
    };
  }

  sendMail(){
    let msg = `
        <p>Dear Friend</p>
        <p>This finally worked</p>
    `

    let msgn = `
      Dear Friend\n
      This is hard
    `

    let mail = {
      'to': 'wanakashah14833@gmail.com',
      'from': 'someone@example.com',
      'subject': 'Test Email',
      'content': msgn,
      'htmlcontent': msg
    }
    return this.http.post(this.sendMailUrl, mail, this.httpOptions);
  }
}
