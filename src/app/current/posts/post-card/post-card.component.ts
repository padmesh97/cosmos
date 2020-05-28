import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import { DomSanitizer } from '@angular/platform-browser';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  constructor(private data: DataService,public sanitizer: DomSanitizer,private titleService:Title) 
  { 
    this.titleService.setTitle("Current Feed | Cosmos");
  }

  received = 'none';

  posts: any = [];

  ngOnInit() 
  {
  	this.data.getPostData().subscribe(data =>{
      this.posts.push(data);
      this.received='success';
    },
    error => {
      this.received='error';
    });

  }

}
