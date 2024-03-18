import { Component } from '@angular/core';
import { files } from '../files.map';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected readonly background_cloud: string = files.background_cloud;

  constructor(private httpClient: HttpClient){}

  downloadApp()
  {
    this.httpClient.get('https://chillcloudserver-production.up.railway.app/download')
    .subscribe();
  }

}
