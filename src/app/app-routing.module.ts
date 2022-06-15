import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {UsersComponent} from "./components/users/users.component";
import {ApartmentsComponent} from "./components/apartments/apartments.component";
import {RegisterComponent} from "./components/register/register.component";
import {ApartmentDetailsComponent} from "./components/apartment-details/apartment-details.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {PersonalInfoComponent} from "./components/personal-info/personal-info.component";
import {EditApartmentComponent} from "./components/edit-apartment/edit-apartment.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path:'',redirectTo:'apartments',pathMatch:'full'},
      {path: 'login', component: LoginComponent},
      {path: 'users', component: UsersComponent},
      {path: 'user-det', component: UserDetailsComponent},
      {path: 'personal-info', component: PersonalInfoComponent},
      {path: 'apartments', component: ApartmentsComponent},
      {path: 'apartments/:id', component: ApartmentDetailsComponent},
      {path: 'personal-info/:id', component: EditApartmentComponent},
      {path: 'register', component: RegisterComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
