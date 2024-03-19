import { Component } from '@angular/core';
import { files } from '../files.map';

import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

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
    this.httpClient.get('https://chillcloudserver-production.up.railway.app/download', {headers: {'Content-Type': 'application/zip'}, responseType: 'blob' })
    .subscribe((response: Blob) => {
      this.saveFile(response);
    });
  }

  saveFile(response: Blob) {
    const blob = new Blob([response], { type: 'application/zip' });
    saveAs(blob, 'ChillCloud.zip');
  }

}
