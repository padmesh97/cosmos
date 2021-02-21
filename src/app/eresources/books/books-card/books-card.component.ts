import { Component, OnInit} from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
declare var $:any;

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.css']
})
export class BooksCardComponent implements OnInit {

	constructor(private http: HttpClient) { }
  
  	API_URL= environment.API_URL;
  	ebookInitialized=false;
  	ebooks_list;
  	ebook_id;
  	totalPages=[];
  	pagesCount;
  	screenOpen=false;
  	library_status='loading';
  	maxPageHeight=0;
  	deviceOrientation='landscape';
  	//-------Available Ebook Page Quality Options-----------
	//     'low' / 'med'  / 'high'
  	currentPageQuality='med';

  	url=this.API_URL+'index.php/eresources/ebook_list/all';

	ngOnInit(): void {
		this.http.get(this.url).subscribe(data => {
	        this.ebooks_list = data;
	        this.library_status='success';
	      },
	      error =>
	      {
	      	this.library_status='error';
	      });
	}

	openEbook(event,id,pages){
		console.log(event);
		this.totalPages=[];
		this.toggleEbookScreen();

		this.pagesCount=pages;
		this.ebook_id=id;

		//Front Cover Inside
		$('#book-container').prepend("<div class=\"hard\" style=\"background-color:rgb(200,200,220);height: inherit;\"></div\>");
		
		//Front Cover Outside
		//------plain template-------
		//$('#book-container').prepend("<div class=\"hard\" \><img src=\"/assets/images/cover.jpg\" width=\"100%\"\></div>");
		//------with book cover--------
		$('#book-container').prepend("<div class=\"hard\" \><img src=\""+this.API_URL+"/assets/ebooks/"+this.ebook_id+"/"+this.ebook_id+"-cover.jpg\" width=\"100%\"\></div>");
		
		//Back Cover Inside
		if(this.pagesCount%2==0)
			$('#book-container').append("<div class=\"hard\" style=\"background-color:rgb(200,200,220);height: inherit;\"></div\>");
		
		//Back Cover Outside
		$('#book-container').append("<div class=\"hard\"><img  src=\"/assets/images/last_cover.jpg\" width=\"100%\"\></div\>");

		for(var i=1;i<=pages;i++){
			this.totalPages.push({'pageno':i,'ebook_id':id});
		}
	}

	toggleEbookScreen(){
		if(this.screenOpen){
			this.zoomPage('out');
			$("#book-container").turn("destroy");
		}
		this.screenOpen=!this.screenOpen;

		document.getElementsByClassName('loader-wrapper')[0]['style'].display="block";
		$('#page-left-control').css({"display":"none"});
		$('#page-right-control').css({"display":"none"});
		document.getElementById('book-container').style.visibility='hidden';

		$('.ebook-open-screen').toggle();
	}

	ebookPageLoaded(event,pageIndex){
		let id=event.target.id;
		let currentPageHeight=$('#'+id).height();

		if(currentPageHeight>this.maxPageHeight){
			this.maxPageHeight=currentPageHeight;
			$('#book-container').css({"height":this.maxPageHeight+"px"});
		}

		if(pageIndex==this.pagesCount){
			if(window.innerWidth>window.innerHeight){
				$('#book-container').turn();
			}
			else{
				this.deviceOrientation='mobile';
				$('#book-container').turn({"display":'single'});
			}
			$('#page-right-control').css({"display":"block","height":this.maxPageHeight+'px',"line-height":this.maxPageHeight+'px'});
			$('#page-left-control').css({"display":"block","height":this.maxPageHeight+'px',"line-height":this.maxPageHeight+'px'});
			document.getElementsByClassName('loader-wrapper')[0]['style'].display="none";
			document.getElementById('book-container').style.visibility='visible';
		}
	}

	zoomPage(option){
		if(option==='in'){
			$("#book-container").turn("zoom",1.5);
			//this.currentPageQuality='high';

			let bookContainerHeight=$("#book-container").height();
			let bookContainerWidth=$("#book-container").width();
			let bookContainerOffsetLeft=$("#book-container").offset().left;
			if(this.deviceOrientation==='landscape'){
				$('#page-right-control').css({"height": bookContainerHeight+'px',"line-height":bookContainerHeight+'px','right':'unset','left':(bookContainerWidth-10)+'px'});
				$('#page-left-control').css({"height":bookContainerHeight+'px',"line-height":bookContainerHeight+'px'});
			}
			if(this.deviceOrientation==='mobile'){
				$('#page-right-control').css({"height": bookContainerHeight+'px',"line-height":bookContainerHeight+'px','right':'unset','left':(bookContainerWidth+bookContainerOffsetLeft+60)+'px'});
				$('#page-left-control').css({"height":bookContainerHeight+'px',"line-height":bookContainerHeight+'px'});
				$("#book-container").css({"transform":'translateX(20px)'});
			}

		}
		else{
			$("#book-container").turn("zoom",1.0);
			//this.currentPageQuality='med';

			let bookContainerHeight=$("#book-container").height();
			let bookContainerWidth=$("#book-container").width();
			let bookContainerOffsetLeft=$("#book-container").offset().left;
			if(this.deviceOrientation==='landscape'){
				$('#page-right-control').css({"height": bookContainerHeight+'px',"line-height":bookContainerHeight+'px','right':'unset','left':(bookContainerWidth-10)+'px'});
				$('#page-left-control').css({"height":bookContainerHeight+'px',"line-height":bookContainerHeight+'px'});
			}
			if(this.deviceOrientation==='mobile'){
				$('#page-right-control').css({"height": bookContainerHeight+'px',"line-height":bookContainerHeight+'px','right':'unset','left':(bookContainerWidth+bookContainerOffsetLeft+10)+'px'});
				$('#page-left-control').css({"height":bookContainerHeight+'px',"line-height":bookContainerHeight+'px'});
			}	$("#book-container").css({"transform":'translateX(0)'});
		}
	}

	getPageLink(page):string{
		return this.API_URL+'assets/ebooks/'+this.ebook_id+'/'+this.ebook_id+'-'+this.currentPageQuality+'-'+page+'.jpg';
	}
	showNextPage(){
		$(".book-container").turn("next");
	}
	showPreviousPage(){
		$(".book-container").turn("previous");
	}
	showPage(option){
		//-------------options--------------------
		// '0' - trigger from Goto page button
		// '1' - trigger from Start page button
		// '2' - trigger from End page button
		//-----------------------------------------
		if(option == '0'){
			let pageno=$('#goto-page').val();
			if(pageno!=='' && Number.isInteger(parseInt(pageno))){
				pageno=parseInt(pageno);
				if(pageno>=1 && pageno<=this.pagesCount)
					$(".book-container").turn("page", pageno+2);
			}
		}
		else if(option == '1'){
			$(".book-container").turn("page",3);
		}
		else{
			$(".book-container").turn("page",parseInt(this.pagesCount)+2);
		}
		
	}
	
}
