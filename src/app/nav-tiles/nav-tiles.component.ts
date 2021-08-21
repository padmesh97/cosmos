import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-nav-tiles',
  templateUrl: './nav-tiles.component.html',
  styleUrls: ['./nav-tiles.component.css']
})
export class NavTilesComponent implements OnInit {

	constructor() 
	{ }

	ngOnInit(): void {

		$("body").click(function(e) {
			if (e.target.id == "master_search_desktop_wrapper" || $.contains(document.getElementById('master_search_desktop_wrapper'),e.target) || e.target.id == "master_search_results_desktop" || $.contains(document.getElementById('master_search_results_desktop'),e.target)) {
				$('#master_search_results_desktop').css({"display":"block"});
			}
			else{
				$('#master_search_results_desktop').css({"display":"none"});
			}
		});
	}

}
