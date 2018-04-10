import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from './service/login-service.service';
import { QuoteDataService } from './service/quote-data.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ColorsDirectiveDirective } from './directives/colors-directive.directive';
import { ConverFileSizePipe } from './pipes/conver-file-size.pipe';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quote', component: ParentComponent },
  { path: '', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    ColorsDirectiveDirective,
    ConverFileSizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  
  providers: [ LoginServiceService, QuoteDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
