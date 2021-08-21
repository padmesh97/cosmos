import { Component, OnInit, Input} from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as M from 'materialize-css';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pics-card',
  templateUrl: './pics-card.component.html',
  styleUrls: ['./pics-card.component.css']
})
export class PicsCardComponent implements OnInit {
	API_URL= environment.API_URL;

	galleryList:any;
	galleryListStatus='loading';

	isSearched:boolean=false;

	@Input() childMessageGallery: any={};

	constructor(private http: HttpClient,private titleService:Title) 
	{
		this.titleService.setTitle("Gallery | Cosmos");
	}

	ngOnInit(): void {
		if(Object.keys(this.childMessageGallery).length == 0)
  			this.fetchGallery();
  		else{
  		  this.isSearched=true;
	      this.galleryList=this.childMessageGallery;
	      this.galleryListStatus='success';
	      setTimeout(() => {
			let elems = document.querySelectorAll('.materialboxed');
			let instances = M.Materialbox.init(elems, {});
		  },100);
	    }
		
	}

	fetchGallery(){
		const url=this.API_URL+'index.php/entertainment/wallpaper/all';
		this.http.get(url).subscribe(data => {
			if(data['status']=='success'){
				this.galleryList = data['message'];
				this.galleryListStatus='success';
				setTimeout(() => {
					let elems = document.querySelectorAll('.materialboxed');
					let instances = M.Materialbox.init(elems, {});
				},100);
			}
			else{
				this.galleryListStatus='error';
			}
		},
		error =>
		{
			this.galleryListStatus='error';
		}
		);
	}

}
