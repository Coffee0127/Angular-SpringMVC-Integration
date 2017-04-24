import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'pages',
    children: [
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


