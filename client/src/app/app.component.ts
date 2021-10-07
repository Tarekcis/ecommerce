import {ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SkiNet';
  radioModel = 'Middle';
  radioModelDisabled = 'Middle';
  modelGroupDisabled=false
}
