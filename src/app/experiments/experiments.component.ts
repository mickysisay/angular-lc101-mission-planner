import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
 experiments :string[] =["Mars soil sample","Plant growth in habitat","Human bone density"];
 selected:string; 
 showWarning:boolean=false;
 constructor() { }

  ngOnInit() {
  }
  add(str:string){
    if(!this.experiments.includes(str.trim()) && str.trim() !==""){
      this.experiments.push(str);
    }
  }
  edit(str:string){
   this.selected = str;
   this.showWarning =false;
  }
  change(str:string,str2:string){
    if(!this.experiments.includes(str2.trim()) && str2.trim()!== ""){
     this.experiments[this.experiments.indexOf(str)] = str2;
     this.selected ='';
     this.showWarning =false;
    }else{
    this.showWarning =true;
    }
  }

}
