import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordServiceService {

  constructor(private http: HttpClient) { }

  callService(payLoad: any): Observable<any> {

   let httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json;'})
    };
    return this.http.post('http://passwordvalidator-env.eba-3zm4esbf.us-east-2.elasticbeanstalk.com/api/validate', payLoad, httpOptions);
  }

}
