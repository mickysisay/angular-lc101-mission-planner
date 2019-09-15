import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
 equipments = ["Habitat dome,","Drones", "Food containers","Oxygen tanks"];
 beingEdited :string;
 constructor() { }

  ngOnInit() {
  }
 add(equip:string){
   if( !this.equipments.includes(equip.trim()) && equip.trim().length>0 ){
     this.equipments.push(equip);
   }
  }
  remove(str:string){
   this.equipments.splice(this.equipments.indexOf(str),1);
  }
  edit(str:string){
    this.beingEdited = str;
  }
  changes(str:string, str2:string){
    if( !this.equipments.includes(str) && str.trim().length>0){
      this.equipments[this.equipments.indexOf(str2)] = str;
    this.beingEdited=null;
    }
}
}
