import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordClientComponent } from './password-client/password-client.component';


const routes: Routes = [{path: 'home', component: PasswordClientComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
