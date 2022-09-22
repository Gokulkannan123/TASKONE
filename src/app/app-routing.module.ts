import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [{
  path: 'aboutus',
  component: AboutusComponent,
  children: [{
    path: 'component1',
    component: Component1Component,
    children: [{
      path: 'component2',
      component: Component2Component,
      children:[{
        path:'contactus',
        component:ContactusComponent
       }]
    }],
    
  }
  ]
},
{
  path: 'contactus',
  component: ContactusComponent
},
{
  path: 'component1',
  component: Component1Component
},
{
  path: 'component2',
  component: Component2Component
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
