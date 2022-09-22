import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
id=10
  constructor(private route:ActivatedRoute) { 
  }

  ngOnInit(): void {
 this.route.params.subscribe((data)=>{
  // console.log(data);
  
 })
  }

}
