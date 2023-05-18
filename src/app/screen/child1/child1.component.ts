import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  public child1 = ""
  constructor(public testService:UserService){
  }
  toAddChil2(){
    this.testService.myData1 =this.child1
  }
}
