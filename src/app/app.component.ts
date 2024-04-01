import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient,  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  public msg = '';
  public data : any;
  user : any={
    firstName : '',
    lastName : '',
  }

  constructor(private http:HttpClient){}
  ngOnInit(){
    this.fetchDetails();
  }


  onChange(val : any){
    this.msg=val;
  }

  public fruits = [
    {name : "Apple", price : 85},
    {name : "Kiwi", price : 210},
    {name : "Orange", price : 25},
    {name : "Mango", price : 50},
    {name : "Grapes", price : 120}
  ]
   fetchDetails=()=>{
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(
      (resp : any)=>{
        console.log(resp);
        this.data= resp;
      }
    )
  }

  onSubmit(){
    console.log(this.user);
  }
}
