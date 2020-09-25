import { Component, OnInit} from '@angular/core';
import { DomSanitizer,Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})

export class PostCardComponent implements OnInit {
  API_URL= environment.API_URL;
  received = 'none';
  posts: any = [];
  tempPosts: any = [];
  fetchGap=5; // use this to set number of results wanted per fetch
  fetchEnd=0;

  constructor(private http: HttpClient,public spinner: NgxSpinnerService,public sanitizer: DomSanitizer,private titleService:Title) 
  { 
    this.titleService.setTitle("Feed | Cosmos");
  }

  ngOnInit(){
    if(this.posts.length === 0)
      this.loadInitPosts();
  }

  loadInitPosts(){
    const url = this.API_URL+'getPosts.php?fetchEnd='+this.fetchEnd+'&fetchGap='+this.fetchGap;
    this.http.get(url).subscribe(data => {
      this.posts = data;
      this.received='success';
    },
    error =>
    {
      this.received='error';
    });
  }

  loadNextPosts(){
    if(this.received !== 'end' && this.received !== 'error'){
      this.spinner.show();
      this.fetchEnd+=this.fetchGap;
      const url = this.API_URL+'getPosts.php?fetchEnd='+this.fetchEnd+'&fetchGap='+this.fetchGap;
      this.http.get(url).subscribe(data => {
        this.tempPosts = data;
        this.spinner.hide();
        if(this.tempPosts.length < this.fetchGap)
          this.received='end';
        this.posts = this.posts.concat(this.tempPosts);
      },
      error =>
      {
        this.received='error';
      });

      this.tempPosts = [];
    }
  }
}
