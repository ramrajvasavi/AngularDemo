import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  constructor(private data: LoginServiceService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  login(){
    
    if(this.username && this.password){
      this.data.changeUsername(this.username);
      this.router.navigateByUrl('/home');
    }
  }

}
