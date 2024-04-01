
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyFirstAngularApp';
 
 
    //-----------------------TWO WAY RENDERING-----------------------
  public msg = 'Hello World';
 
  onchange(val : any) {
    this.msg = val;
  }
 
  //-----------------------TABLE RENDERING-----------------------
 
  public fruits = [
    {name : 'Apple', price : 50},
    {name : 'Apple', price : 80},
    {name : 'Apple', price : 120},
    {name : 'Apple', price : 150},
    {name : 'Apple', price : 20},
  ]
 
 
  //-----------------------APIs-----------------------
 
  // public data : any;  //For API data
  // constructor(private http : HttpClient) {}
  // ngOnInit() {
  //   this.fetchDetails();
  // }
 
  // fetchDetails() {
  //   this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(
  //     (resp : any) => {
  //       console.log('Response is : ',resp);
  //       this.data = resp;
  //     }
  //   )
  // }
 
 
  //-----------------------TEMPLATE DRIVEN FORMS-----------------------
  user : any = {
    firstName : '',
    lastName : '',
  }
 
  // onSubmit() {
  //   console.log("User ---->", this.user);
  // }
 
 
    //-----------------------REACTIVE FORMS-----------------------
 
    // constructor(private fb : FormBuilder) {}
 
    // submit = false;
    // registrationForm = this.fb.group ({
    //   firstName : ['',Validators.required],
    //   lastName : [],
    //   phone : [''],
    //   email : ['', [Validators.email,this.emailValidator]]
    // })
 
    // get f() {
    //   return this.registrationForm.controls;
    // }
 
    // ngOnInit() {}
 
    // onSubmit() {
    //   this.submit = true;
    //   console.log("Clicked..!");
    //   console.log(this.registrationForm.value);
    //   console.log(this.registrationForm.controls);
    // }

    // emailValidator(control : any){
    //   const emailRegex = /^\w+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
    //   if(!control.value || emailRegex.test(control.value)){
    //     return null;
    //   }
    //   else{
    //     return {invalidEmail : true};
    //   }
    // }

    //Dynamic forms///

    constructor(private fb : FormBuilder) {}
    get alternativeEmails(){
      return this.registration.get('alternativeEmails') as FormArray;
    }

    registration = this.fb.group({
      email : ['demo@gmail.com'],
     alternativeEmails: this.fb.array([])
    });
 
    onSubmit(data : any){
      console.log(data.value);
    }

    addAlternativeEmail(){
      this.alternativeEmails.push(this.fb.control(''));
    }
}
 
