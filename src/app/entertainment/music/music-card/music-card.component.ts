import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer,Title } from '@angular/platform-browser';
import * as M from 'materialize-css';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent implements OnInit {
	API_URL= environment.API_URL;

	musicList:any;
	musicListStatus='loading';

	genreList:any;

	@Input() childMessageMusic: any={};

  	constructor(private http: HttpClient,public sanitizer: DomSanitizer,private titleService:Title)
  	{
  		this.titleService.setTitle("Music | Cosmos");
  	}

 	ngOnInit(): void {
 		if(Object.keys(this.childMessageMusic).length == 0)
  			this.allGenreAndMusicFetch();
  		else{
  			this.searchGenreandMusicFetch();
	    }
  	}

  	musicFetch(){
	const url=this.API_URL+'index.php/entertainment/music/all';
		this.http.get(url).subscribe(data => {
			if(data['status']=='success'){
				this.musicList = data['message'];
				this.musicListStatus='success';
				setTimeout(() => {
					this.initCollapsible();
				},100);
			}
			else{
				this.musicListStatus='error';
			}
		},
		error =>
		{
			this.musicListStatus='error';
		}
		);
	}

	allGenreAndMusicFetch(){
	const url=this.API_URL+'index.php/entertainment/music/genres';
		this.http.get(url).subscribe(data => {
			if(data['status']=='success'){
				this.genreList = JSON.parse(data['message']);
				this.musicFetch();
			}
			else{
				this.musicListStatus='error';
			}
		},
		error =>
		{
			this.musicListStatus='error';
		}
		);
	}

	searchGenreandMusicFetch(){
		this.genreList = Object.keys(this.childMessageMusic);
		this.musicList=this.childMessageMusic;
		this.musicListStatus='success';
		setTimeout(() => {
			this.initCollapsible();
		},100);
	}

	initCollapsible(){
		let elems = document.querySelectorAll('.collapsible.expandable');
    	let instances = M.Collapsible.init(elems,{
    		accordion: false
    	});
	}

}
