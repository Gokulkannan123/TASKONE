import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
title:any="heloooo"
isdisabled:boolean=true
twoway:any
Active:boolean=false
planets:string[]=["earth", "venus" ,"jupiter"]  
company:any=[{id:1,name:"google"},{id:2,name:"microsoft"},{id:3,name:"intel"}]

  constructor() { }

  ngOnInit(): void {
  }
onclick(event:any){
let get:any=event.target.value
if(get!=null){
  this.isdisabled=false
  return
}
this.isdisabled=true
}
myButton(){
 this.twoway=""
 this.isdisabled=true
}
isActive(){
this.Active=!this.Active
}
}
