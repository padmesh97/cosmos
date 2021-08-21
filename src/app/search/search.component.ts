import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { fromEvent, Observable, merge} from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap,  tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NavTilesComponent } from '../nav-tiles/nav-tiles.component';
declare var $:any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	API_URL= environment.API_URL;

	filterArray=[];
	debounceTime:number=800;
	searchQuery:String="";
	minSearchCharCount:number=2;

	resultList={
		blogs:[],
		movies:[],
		music:[],
		gallery:[],
		ebooks:[]
	};

	resultListStatus='idle';

	constructor(private http: HttpClient,public sanitizer: DomSanitizer) { }

	ngOnInit(): void {

		var desktopSearchInput = document.getElementById('master_search_desktop');
		var mobileSearchInput = document.getElementById('master_search_mobile');

		const typeahead = merge(fromEvent(desktopSearchInput, 'input'),fromEvent(mobileSearchInput, 'input')).pipe(
		  map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
		  tap((searchTerm) => {
		  	this.searchQuery=searchTerm
		  	if(searchTerm.length<this.minSearchCharCount)
				this.resultListStatus='idle';
		  }),
		  filter(text => text.trim().length >= this.minSearchCharCount),
		  debounceTime(this.debounceTime),
		  distinctUntilChanged(),
		  tap((searchTerm) => {
		  	this.searchQuery=searchTerm
		  	this.resultListStatus='loading'}
		  ),
		  switchMap(searchTerm =>
		  	this.http.get(this.API_URL+'index.php/search/?query='+btoa(encodeURI(this.searchQuery.trim()))+'&filters='+btoa(encodeURI(JSON.stringify(this.filterArray)))))
		  );

		typeahead.subscribe(data => {
			//console.log(data);
			this.handleHttpData(data);
		},
		error =>
		{
			this.resultListStatus='error';
		}
		);
	}

	handleHttpData(data){
		if(data['status']=='success'){
			this.resultList = data['message'];
			this.resultListStatus='success';
			
			var resultKeys=Object.keys(this.resultList);
			var isEmptySearch=true;
			for(var i=0;i<resultKeys.length;i++){
				if(this.resultList[resultKeys[i]].length>0)
					isEmptySearch=false;
			}

			if(isEmptySearch)
				this.resultListStatus='empty_success';

			if(this.searchQuery.length==0)
				this.resultListStatus='idle';
		}
		else{
			this.resultListStatus='error';
		}
	}
	modifyFilterArray(filter){
		if(this.filterArray.includes(filter))
			this.filterArray.splice(this.filterArray.indexOf(filter),1);
		else
			this.filterArray.push(filter);

		let url =this.API_URL+'index.php/search/?query='+btoa(encodeURI(this.searchQuery.trim()))+'&filters='+btoa(encodeURI(JSON.stringify(this.filterArray)));
		if(this.searchQuery.length > this.minSearchCharCount){
			this.http.get(url).subscribe(data => {
				this.handleHttpData(data);
			},
			error =>
			{
				this.resultListStatus='error';
			}
			);
		}

	}

	isFilterArrayContain(filter){
		if(this.filterArray.includes(filter))
			return true;
		else
			return false;
	}

	isSearchResultContain(filter){
		if(filter in this.resultList && this.resultList[filter].length>0)
			return true;
		else
			return false;
	}

	showMoreLess(event){
		if(event.target.innerHTML.substring(0,4)=='more'){
			event.target.innerHTML='less';
			event.target.parentNode.classList.toggle("search-result-category-full-height");;
		}
		else{
			event.target.innerHTML='more';
			event.target.parentNode.classList.toggle("search-result-category-full-height");;
		}
	}

}
