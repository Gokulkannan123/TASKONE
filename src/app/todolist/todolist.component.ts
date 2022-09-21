import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
@ Output () newEdit=new EventEmitter
datas=''
  constructor() { }

  ngOnInit(): void {
  }
get(){
this.newEdit.emit(this.datas)
this.datas=""
}

}
