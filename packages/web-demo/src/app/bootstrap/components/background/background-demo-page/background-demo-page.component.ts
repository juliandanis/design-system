import { Component } from '@angular/core';
const  codeTemplate = require('!!raw-loader!../background-demo/background-demo.component.html').default

@Component({
  selector: 'app-background-demo-page',
  templateUrl: './background-demo-page.component.html',
  styleUrls: ['./background-demo-page.component.scss']
})
export class BackgroundDemoPageComponent {
  codeTemplate = codeTemplate;
  bgOpacity = 1;
  bgOpacity1 = 1;
}
