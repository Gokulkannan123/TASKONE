import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  constructor(private nav:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
  }
get(){
this.nav.navigate(['pagenotfound'],{relativeTo:this.router})
console.log("works");

}
}
