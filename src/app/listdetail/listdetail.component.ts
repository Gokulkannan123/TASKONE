import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listdetail',
  templateUrl: './listdetail.component.html',
  styleUrls: ['./listdetail.component.scss']
})
export class ListdetailComponent implements OnInit {
// datas:any
// ischecked:boolean=false
@ Input () Edit:any
ischecked:boolean=false
  constructor() { }
  // arr = [{
  //   isChecked: false
  // }]
  ngOnInit(): void {
  }
// get(){
//   this.arr.push(this.datas)
//   // console.log(this.arr);
  
// }
check(){
  this.ischecked=!this.ischecked
}
}
