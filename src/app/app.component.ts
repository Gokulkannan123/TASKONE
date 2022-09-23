import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'ANGULAR';
  // newuser:string='heloooo'
  list:any=[]
  // emit(event:any){
  // console.log(event);
  // this.new.push(event)
  get(event:any){
this.list.push(event)
  }
  }

