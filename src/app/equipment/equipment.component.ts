import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: any[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   isOver: boolean[]=[false,false,false,false,false,false,false,false,false];
   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addToEquipment(obj:any){
    let isDone = false;
    if(this.maximumAllowedMass >= this.cargoMass+obj.mass){ 
      this.cargoHold.push(obj);
       this.cargoMass+= obj.mass;
      }
      if(this.cargoHold.length === this.maxItems){
       isDone =true;
      } 
    for(let i:number=0;i<this.equipmentItems.length;i++){
      this.isOver[i]= !(this.maximumAllowedMass >=this.cargoMass+ this.equipmentItems[i].mass);
      if(isDone){
        this.isOver[i] = true;
      }
    }
    
     
   }
   returnIsOver(obj:any){
    return this.isOver[this.equipmentItems.indexOf(obj)];
   }
   reset(){
     this.cargoHold = [];
     this.cargoMass=0;
     for(let i:number=0;i<this.equipmentItems.length;i++){
       this.isOver[i]=false;
     }
   }
}
