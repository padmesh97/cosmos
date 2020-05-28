import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPostData(){
    return this.http.get('https://www.padmeshkunwar.me/cosmosServer/getPosts.php');
  }
}
