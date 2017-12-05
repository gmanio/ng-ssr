import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

// declare var dataLayer: Array<any>;
//
// const gtag = function (...args) {
//   dataLayer.push(arguments);
// };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  constructor(public router: Router) {
    // gtag('config', 'UA-59800730-4');
  }
}
