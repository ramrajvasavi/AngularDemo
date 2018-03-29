import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from '../service/login-service.service';
import { HomeComponent } from '../home/home.component';
import { RouterTestingModule } from '@angular/router/testing';


import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
        RouterTestingModule.withRoutes([{ path: 'home', component: HomeComponent }]) ],
      
      declarations: [ LoginComponent, HomeComponent ],
      providers: [ LoginServiceService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
   // fixture.debugElement.query(By.css('input[name="username"]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should allow us to set a bound input field', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.logininput').length).toBe(2);
  }));
  
  
});
