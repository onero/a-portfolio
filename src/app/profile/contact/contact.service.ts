import { EmailModel } from './email.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private mailApi = 'https://mailthis.to/info@adamino.dk'

  constructor(private http: HttpClient) { }

  public postMessage(email: EmailModel) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('https://formspree.io/f/mvolkeby',
      { name: email.fullname, replyto: email.email, message: email.comment },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
          return response;
        }
      );
  }
}
