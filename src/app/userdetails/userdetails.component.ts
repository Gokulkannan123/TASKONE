import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
@ Input ()user:any
@ Input ()index:number=0
@ Output () newEdit=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
remove(){
  this.newEdit.emit(this.index)
}
}