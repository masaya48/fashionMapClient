import { Component } from '@angular/core';

import { TopComponent } from './top/top.component';
import { ResultMapComponent } from './resultMap/resultMap.component';

export const ROUTES = [
  {path: '', component: TopComponent},
  {path: 'resultMap', component: ResultMapComponent}
]

@Component({
  selector: 'body',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

}
