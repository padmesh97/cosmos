import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Location} from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  constructor(private fb:FormBuilder,private _http:HttpClient,private _location: Location) {}

  publishForm = this.fb.group({
  	choice:['',Validators.required],
  	accessToken:['',Validators.required],
  	link:['',Validators.required],
  	content:['',Validators.required]
  });

    submitted='none';
    API_URL= environment.API_URL;
    url=this.API_URL+'index.php/current/feed_add';

  ngOnInit(): void {
  	var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems,"");
  }

  onSubmit(){
    this.submitted='processing';
    var formData: any = new FormData();
    formData.append("choice", this.publishForm.get('choice').value);
    formData.append("accessToken", this.publishForm.get('accessToken').value);
    formData.append("link", this.publishForm.get('link').value);
    formData.append("content", this.publishForm.get('content').value);

  	this._http.post(this.url,formData).subscribe(
      (response:string) => {
        //console.log('Success',response);
        if(response['status'] === 'success')
          this.submitted='success';
        else{
          if(response['status'] === 'error')
            this.submitted='error';
        }
        this.publishForm.reset();
      },
      (error) => {
        this.submitted='error';
        //console.log('Error',error);
      }
  	);
  }

  navigateBack() {
    this._location.back();
  }

}
