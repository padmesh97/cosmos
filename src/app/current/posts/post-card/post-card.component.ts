import { Component, OnInit, AfterViewInit, Input} from '@angular/core';
import { DomSanitizer,Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../../environments/environment';
import * as M from 'materialize-css';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})

export class PostCardComponent implements OnInit {
  API_URL= environment.API_URL;
  received = 'none';
  posts:any = [];
  tempPosts:any = [];
  fetchGap=5; // use this to set number of results wanted per fetch
  fetchEnd=0;
  carouselOptions={fullWidth:true};
  dropdownOptions={coverTrigger:false,alignment:'right'};

  @Input() childMessageBlogs: any={};

  constructor(private http: HttpClient,public spinner: NgxSpinnerService,public sanitizer: DomSanitizer,private titleService:Title) 
  { 
    this.titleService.setTitle("Feed | Cosmos");
  }

  ngOnInit(){}

  ngAfterViewInit(){
    if(this.posts.length === 0 && Object.keys(this.childMessageBlogs).length == 0)
      this.loadInitPosts();
    else{
      this.posts=this.childMessageBlogs;
      this.received='success';
      this.initCarousel();
    }
  }

  loadInitPosts(){
    //const url = this.API_URL+'getPosts.php?fetchEnd='+this.fetchEnd+'&fetchGap='+this.fetchGap;
    const url = this.API_URL+'index.php/current/feed_fetch/'+this.fetchGap+'/'+this.fetchEnd;
    this.http.get(url).subscribe(data => {
      this.posts = data;
      this.received='success';
      this.initCarousel();
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
      //const url = this.API_URL+'getPosts.php?fetchEnd='+this.fetchEnd+'&fetchGap='+this.fetchGap;
      const url = this.API_URL+'index.php/current/feed_fetch/'+this.fetchGap+'/'+this.fetchEnd;
      this.http.get(url).subscribe(data => {
        this.tempPosts = data;
        this.spinner.hide();
        if(this.tempPosts.length < this.fetchGap)
          this.received='end';
        this.posts = this.posts.concat(this.tempPosts);
        this.initCarousel();
      },
      error =>
      {
        this.received='error';
      });

      this.tempPosts = [];
    }
  }

  initCarousel() {
    // timeout needed, otherwise carousel won't work.
    setTimeout(() => {
       let elems = document.querySelectorAll('.carousel');
       let instances = M.Carousel.init(elems, this.carouselOptions);
       let dropdownElems = document.querySelectorAll('.dropdown-trigger');
       let dropdownInstances = M.Dropdown.init(dropdownElems, this.dropdownOptions);
    }, 100);
  }
  carouselNavigate(option,event){
    let instance = M.Carousel.getInstance(event.currentTarget.parentNode);
    if(option==='next')
      instance.next();
    if(option==='prev')
      instance.prev();
  }
  
}
