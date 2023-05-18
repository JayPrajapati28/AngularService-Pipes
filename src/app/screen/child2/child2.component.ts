import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  public child2Val ="";
  constructor(public test:UserService){  
  }
  toAddData(){
    this.test.myData=this.child2Val
  }
}
