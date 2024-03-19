import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  Resolve,
  ActivatedRoute,
  Router,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetResolver implements Resolve<boolean> {
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router){}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const token = route.queryParams['token'];

    if (!token) {
      return of(false);
    }

    return this.httpClient.post<any>('https://chillcloudserver-production.up.railway.app/reset', { token }).pipe(
      take(1),
      switchMap((response: any) => {
        if (!response.can) {
          this.router.navigate(['/']);
        }

        return of(response.can);
      })
    );
  }
}
