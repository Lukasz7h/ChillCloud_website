import { Component } from '@angular/core';
import { files } from './files.map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChillCloud';

  protected readonly background_cloud: string = files.background_cloud;
}
