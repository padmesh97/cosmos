import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import * as M from 'materialize-css';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
	API_URL= environment.API_URL;

	searchResultList:any=[];
	searchResultStatus:any='loading';

	search_uuid:String;
	search_filter:String;
	filterArray=[];

	childMessage:any="";

	constructor(private route: ActivatedRoute,private http: HttpClient,private titleService:Title)
	{
		this.titleService.setTitle("Search Results | Cosmos");
	}

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
		    this.search_uuid = params.get("uuid");
		    this.search_filter=params.get("filter");

		    this.filterArray=[];
		    this.filterArray.push("uuid");
		    this.filterArray.push(this.search_filter);

		    this.fetchSearchResults(this.search_uuid,this.search_filter);
  		})
	}

	fetchSearchResults(uuid,filter): void{

		this.searchResultList=[];
		this.searchResultStatus='loading';

		const url=this.API_URL+'index.php/search?query='+btoa(encodeURI(uuid))+'&filters='+btoa(encodeURI(JSON.stringify(this.filterArray)));
		
		this.http.get(url).subscribe(data => {
			if(data['status']=='success'){
				this.searchResultList = data['message'];
				this.searchResultStatus='success';
				this.childMessage=this.searchResultList[filter];
			}
			else{
				this.searchResultStatus='error';
			}
		},
		error =>
		{
			this.searchResultStatus='error';
		}
		);
	}

	isSearchResultContain(filter):boolean{
		if(filter in this.searchResultList)
			return true;
		else
			return false;
	}

}