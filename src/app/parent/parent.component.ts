import { Component, OnInit, Input } from '@angular/core';
import { JosnusersService } from '../service/josnusers.service';
import { applicationURLS } from '../../application-urlprop';

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
  constructor( private thequoteservice: JosnusersService ) { //initialize
  }

  ngOnInit() {
    this.thequoteservice.getQuote(applicationURLS.quotes).subscribe((data)=>{ //use methods in our service
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
const favourit = [{
  id: 2,
  quote: "Truth is a virus, courage is contagious",
  by: "unknown"
},{
  id:3,
  quote:"Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light",
  by: "Dylan Thomas"
},{
  id:4,
  quote:"It is well enough that people of the nation do not understand our banking and monetary system, for if they did, I believe there would be a revolution before tomorrow morning.",
  by: "Henry Ford"
}];
    this.favourites = this.thequoteservice.getFavQuotes(favourit); //get favoutite quotes
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
