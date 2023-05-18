import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'test';
  public bday = new Date();
  public toggle = true;
  get format(){
    {return this.toggle ? 'shortDate':'fullDate'}
  }
  toogleFormat(){
    this.toggle=!this.toggle
  }
  public inputVal="";
  public inputGen="";
  // public employe: any[]; 
  employe =[{
    name :"Jay",
    gender:"male"
  },
  {
    name :"Dharmit",
    gender:"male"
  },
  {
    name :"Srusti",
    gender:"female"
  }
  ,{
    name :"Puthvi",
    gender:"male"
  }
]
}
