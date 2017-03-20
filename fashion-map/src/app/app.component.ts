import { Component } from '@angular/core';

import { TopComponent } from './top/top.component';
// import { ResultMapComponent } from './result-map/result-map.component';

export const ROUTES = [
  {path: '', component: TopComponent},
  // {path: 'resultMap', component: ResultMapComponent}
]

@Component({
  selector: 'body',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent{
  
}
