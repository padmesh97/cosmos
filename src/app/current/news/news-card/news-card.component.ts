import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import * as M from 'materialize-css';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  constructor(private http: HttpClient,public sanitizer: DomSanitizer) { }
  NASA_API_KEY="oK62IHlXqsr61iGw6FP1MzfvE8AKiWb308fWCSpP";

  picOfDayList:any;
  picOfDayStatus='loading';

  catchISSList:any=[];
  catchISSList2:any=[];
  catchISSStatus='loading';

  spaceNewsList:any;
  spaceNewsTimeList:any={};
  spaceNewsStatus='loading';

  ngOnInit(): void {
  	this.pictureOfDay();
  	this.catchISS();
  	this.spaceNews();
  }

  pictureOfDay(){
  	const url="https://api.nasa.gov/planetary/apod?api_key="+this.NASA_API_KEY;
  	this.http.get(url).subscribe(data => {
        this.picOfDayList = data;
        this.picOfDayStatus='success';
        setTimeout(() => {
          let elems = document.querySelectorAll('.materialboxed');
          let instances = M.Materialbox.init(elems, {});
        }, 100);
      },
      error =>
      {
      	this.picOfDayStatus='error';
      }
     );
  }

  catchISS(){
  	const url="https://api.wheretheiss.at/v1/satellites/25544";
  	this.http.get(url).subscribe(data => {
        this.catchISSList = data;
        	const mapURL="https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+this.catchISSList.latitude+"&longitude="+this.catchISSList.longitude+"&localityLanguage=en";
		    this.http.get(mapURL).subscribe(info => {
		        this.catchISSList2=info;
		        this.catchISSStatus='success';
		      },
		      error =>
		      {
		      	this.catchISSStatus='map-error';
		      }
		    );
      },
      error =>
      {
      	this.catchISSStatus='error';
      }
     );

  }

  spaceNews(){
  	const url="https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=10";
  	this.http.get(url).subscribe(data => {
        this.spaceNewsList = data.results;
        for(var i=0;i<this.spaceNewsList.length;i++){
          var ts=this.spaceNewsList[i].published_at;
          ts=this.getTimeDifference(ts);
          this.spaceNewsList[i].published_at=ts;
        }
        setTimeout(() => {
          this.spaceNewsStatus='success';
        }, 100);
      },
      error =>
      {
      	this.spaceNewsStatus='error';
      }
     );
  }

  getTimeDifference(timestamp: string): string {
      const now = new Date();
      const targetDate = new Date(timestamp);
      const diffMs = Math.abs(targetDate.getTime() - now.getTime());

      // Define time units in milliseconds
      const oneSecond = 1000;
      const oneMinute = oneSecond * 60;
      const oneHour = oneMinute * 60;
      const oneDay = oneHour * 24;
      const oneYear = oneDay * 365;

      if (diffMs >= oneYear) {
          const years = Math.floor(diffMs / oneYear);
          return `${years}y`;
      } else if (diffMs >= oneDay) {
          const days = Math.floor(diffMs / oneDay);
          return `${days}d`;
      } else if (diffMs >= oneHour) {
          const hours = Math.floor(diffMs / oneHour);
          return `${hours}h`;
      } else if (diffMs >= oneMinute) {
          const minutes = Math.floor(diffMs / oneMinute);
          return `${minutes}m`;
      } else {
          return "a few seconds";
      }
  }

  spaceNewsTimeElapsed(timestamp){
  	const timeURL=environment.API_URL+"index.php/current/get_elapsed_time/"+timestamp;
    this.http.get(timeURL).subscribe(timeElapsed => {
    	var unix=Object.keys(timeElapsed)[0];
    	this.spaceNewsTimeList[unix]=Object.values(timeElapsed)[0];
      });
  }

}
