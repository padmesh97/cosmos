import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPostData(){
    return this.http.get('http://localhost:1234/cosmosServer/getPosts.php');
  }
}
