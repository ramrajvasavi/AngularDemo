import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { QuoteDataService } from '../service/quote-data.service';
import { Router, ActivatedRoute } from '@angular/router';
export interface type{
  typeCourse:string;
  course:string;
  fileSize: Number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../homeComponent.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class HomeComponent implements OnInit {
  name:String;
  show;
public myCourses:type[] = [
    {typeCourse: "Markup", course: 'HTML',fileSize:12042 },
    {typeCourse: "Style", course: 'CSS',fileSize:2042},
    {typeCourse: "Script", course: 'JavaScript', fileSize:1042},
    {typeCourse: "Scriot Library", course: 'JQuery ', fileSize:12042},
    {typeCourse: "FrameWork", course: 'AngularJS ',fileSize:812042},
    {typeCourse: "Serverside Script", course: 'Nodejs',fileSize:625042},
    {typeCourse: "Programming language", course: 'Java',fileSize:72042},
    {typeCourse: "Programming language", course: 'C',fileSize:1204258},
    {typeCourse: "Programming language", course: 'Scala',fileSize:1204289},
    {typeCourse: "Programming language", course: 'Phython',fileSize:1695222},
    {typeCourse: "Database", course: 'MangoDb',fileSize:2568042}
];
  constructor(private data: LoginServiceService, private router: Router) { }
  ngOnInit() {
    this.getUserName();
  }
  getUserName(){
    this.data.currentMessage.subscribe(name => this.name = name);
  }
  gotoQuote(){
    this.router.navigateByUrl('/quote');
  }
}
