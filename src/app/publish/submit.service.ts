import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  _url='http://localhost:1234/cosmosServer/capture.php';
  constructor(private _http:HttpClient) { }

  submit(userData){
  	return this._http.post<any>(this._url,userData);
  }
}
 