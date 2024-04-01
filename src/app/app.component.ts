import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  public msg = '';

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
}
