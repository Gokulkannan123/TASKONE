import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@ Input()user:any
@ Output()newItemEvent=new EventEmitter<string>();
data:any
  constructor() { }

  ngOnInit(): void {
  }
func(){
this.newItemEvent.emit(this.data)
}
}
