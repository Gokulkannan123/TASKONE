import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
datas:any
arr:any=[]
ischecked:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
get(){
  this.arr.push({'name':this.datas,'ischecked':false})  
}
getcheck(){
  // this.ischecked=!this.ischecked
  console.log(this.arr);
}
}
