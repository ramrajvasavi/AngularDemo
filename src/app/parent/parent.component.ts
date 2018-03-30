import { Component, OnInit, Input } from '@angular/core';
import { QuoteDataService } from '../service/quote-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
@Input() textVal;
  myQuote :myQuote = {
    quote: "",
    by: ""
  };
  favourites: Array<myQuote>;
  constructor( private thequoteservice: QuoteDataService) { //initialize
  }

  ngOnInit() {
    this.thequoteservice.getQuote().subscribe((data)=>{ //use methods in our service
      this.myQuote ={
        quote: data.quotes[0].quote,
        by: data.quotes[0].author
      }
    }, (err)=>{
      this.myQuote ={
        quote: err,
        by: err
      }
    });

    this.favourites = this.thequoteservice.getFavQuotes(); //get favoutite quotes
  }
  alertPopup(event){
    alert(event);
  }

}

//creating myQuote interface
interface myQuote {
  id?: number,
  quote: String,
  by: String
}
