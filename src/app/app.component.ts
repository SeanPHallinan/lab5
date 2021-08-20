import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  numOfTimes:any = 0;
  hidden:any = false;

  count():void{
    this.numOfTimes++;
  }

  show(){
    if(this.hidden == true){
     this.hidden = false;
    } else  {
      this.hidden = true;
    }
  }

}
