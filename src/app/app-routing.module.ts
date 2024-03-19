import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResetComponent } from './reset/reset.component';
import { ResetResolver } from './reset.resolver';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "reset", component: ResetComponent, resolve: { data: ResetResolver }},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
