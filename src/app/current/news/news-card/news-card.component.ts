import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

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
  	const url="https://spaceflightnewsapi.net/api/v1/articles";
  	this.http.get(url).subscribe(data => {
        this.spaceNewsList = data;
        for(var i=0;i<this.spaceNewsList.docs.length;i++)
        	this.spaceNewsTimeElapsed(this.spaceNewsList.docs[i].date_published);
        this.spaceNewsStatus='success';
      },
      error =>
      {
      	this.spaceNewsStatus='error';
      }
     );
  }

  spaceNewsTimeElapsed(time_in_unix){
  	const timeURL=environment.API_URL+"index.php/current/get_elapsed_time/"+time_in_unix+"/unix";
    this.http.get(timeURL).subscribe(timeElapsed => {
    	var unix=Object.keys(timeElapsed)[0];
    	this.spaceNewsTimeList[unix]=Object.values(timeElapsed)[0];
      });
  }

}
