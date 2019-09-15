import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean[] = [false,false,false,false,false,false,false]; 
  crew: object[] = [];
  newAs:string ='';
  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(obj:any){
    let num:number = this.candidates.indexOf(obj);
   
    if(this.inCrew[num]){
     this.crew.splice(this.crew.indexOf(obj),1);
     this.inCrew[num]=false;
    }else{
      if(this.crew.length<3){
      this.crew.push(obj);
      this.inCrew[num]=true;
      }
  }
  }
  returnIsCrew(obj:any){
    let num:number = this.candidates.indexOf(obj);
    return this.inCrew[num];
  }
  remove(){
    this.newAs='';
  }

}
