import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {UsersComponent} from "./components/users/users.component";
import {ApartmentsComponent} from "./components/apartments/apartments.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path:'users',component:UsersComponent},
      {path:'apartments',component:ApartmentsComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
