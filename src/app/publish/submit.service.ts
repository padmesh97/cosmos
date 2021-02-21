import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  API_URL= environment.API_URL;
  _url=this.API_URL+'index.php/current/feed_add';
  constructor(private _http:HttpClient) { }

  submit(userData){
  	return this._http.post<any>(this._url,userData);
  }
}
 