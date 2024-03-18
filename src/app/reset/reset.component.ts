import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router){}

  resetFormAction(form: NgForm)
  {
    const password: string = form.value.password;
    if(password.length < 2) alert("Hasło jest za krótkie.");

    this.route.queryParams
      .subscribe((e: any) => {
        const token: string = e.token;
        if(!token) return;

        this.httpClient.post('https://chillcloudserver-production.up.railway.app/reset-password', JSON.stringify({token, password }), {headers: {"Content-Type": "application/json"}})
        .subscribe((e: any) => {
          if(e.reset) this.router.navigate(["/"]);
        })

      })

  }
}
