import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';

export interface type{
  typeCourse:string;
  course:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../homeComponent.css']
})

export class HomeComponent implements OnInit {
  name:String;
public myCourses:type[] = [
    {typeCourse: "Markup", course: 'HTML'},
    {typeCourse: "Style", course: 'CSS'},
    {typeCourse: "Script", course: 'JavaScript'},
    {typeCourse: "Scriot Library", course: 'JQuery '},
    {typeCourse: "FrameWork", course: 'AngularJS '},
    {typeCourse: "Serverside Script", course: 'Nodejs'},
    {typeCourse: "Programming language", course: 'Java'},
    {typeCourse: "Programming language", course: 'C'},
    {typeCourse: "Programming language", course: 'Scala'},
    {typeCourse: "Programming language", course: 'Phython'},
    {typeCourse: "Database", course: 'MangoDb'}
];
  constructor(private data: LoginServiceService) { }
  ngOnInit() {
    this.getUserName();
  }
  getUserName(){
    this.data.currentMessage.subscribe(name => this.name = name);
  }
}
