import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
declare var $:any;
import { FormBuilder,Validators } from '@angular/forms';
import { SubmitService } from './submit.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  constructor(private fb:FormBuilder,private _submitService:SubmitService,private _location: Location) {}

  publishForm = this.fb.group({
  	choice:['',Validators.required],
  	accessToken:['',Validators.required],
  	link:['',Validators.required],
  	content:['',Validators.required]
  });

    submitted='none';


  ngOnInit(): void {
  	var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems,"");

  }

  onSubmit(){
    this.submitted='processing';
  	console.log(this.publishForm.value);
  	this._submitService.submit(this.publishForm.value).subscribe(
  		//response => console.log('Success'+response.status,response),
  		//error => console.log('Error',error)
      response => {this.submitted='success';this.publishForm.reset();console.log('Success',response);},
      error=> {this.submitted='error';console.log('Error',error);}
  	);
  }

  navigateBack() {
    this._location.back();
  }

}
