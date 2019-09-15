import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  editingName:boolean[]=[true,true,true];
  crew: any[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
 editing:boolean=false;
  chosenOne:object={name: "Eileen Collins", firstMission: false};
  constructor() { }

  ngOnInit() {
  }
  isFirst(obj: any){
    if(obj.firstMission === true){
      return '-1st';
    }
  }
  add(newCrew:string,isFirst:boolean){
    this.crew.push({"name": newCrew , "firstMission":isFirst});
    this.editingName.push(true);
  }
  remove(obje:object){
    this.crew.splice(this.crew.indexOf(obje),1);
    this.editingName.splice(this.crew.indexOf(obje),1);
  }
 timeToEdit(nameobj:any){
   return this.editingName[this.crew.indexOf(nameobj)];
 }
 actuallyEdit(nameobj:any){
   for(let i:number = 0;i<this.editingName.length;i++){
     if(i===this.crew.indexOf(nameobj)){
      this.editingName[this.crew.indexOf(nameobj)]=this.editingName[this.crew.indexOf(nameobj)] === false ? true: false;
     }else{
      this.editingName[i]=true;
     }
   }
  
  
 }
  changeName(nameobj: any ,newName:string){
  this.crew[this.crew.indexOf(nameobj)].name = newName;
 }
}
