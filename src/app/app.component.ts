import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mission-planning-dashboard';
  editingRocket: boolean = false;
  editingMission: boolean = false;
  isShowing:boolean=true;
  showing:string = "show";
  changeShowStatus(){
    this.isShowing = !this.isShowing;
    this.showing= this.showing==="show"? 'hide' : "show";
  }
}
