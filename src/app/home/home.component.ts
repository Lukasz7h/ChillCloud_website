import { Component, Renderer2 } from '@angular/core';
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

  constructor(private httpClient: HttpClient, private renderer: Renderer2){}

  downloadApp()
  {
    const donwload = this.renderer.createElement("div");
    donwload.classList.add("download");

    const load = this.renderer.createElement("div");
    load.classList.add("loader");

    const body = this.renderer.selectRootElement("body", true);

    this.renderer.appendChild(body, donwload);
    this.renderer.appendChild(donwload, load);

    this.httpClient.get('https://chillcloudserver-production.up.railway.app/download', {headers: {'Content-Type': 'application/zip'}, responseType: 'blob' })
    .subscribe((response: Blob) => {
      this.saveFile(response);
    });

  }

  saveFile(response: Blob) {
    const blob = new Blob([response], { type: 'application/zip' });

    const download = this.renderer.selectRootElement(".download", true);
    download.remove();

    saveAs(blob, 'ChillCloud.zip');
  }
}
