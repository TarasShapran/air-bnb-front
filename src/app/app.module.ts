import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MainInterceptor} from "./main.interceptor";
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { ApartmentComponent } from './components/apartments/apartment/apartment.component';
import { RegisterComponent } from './components/register/register.component';
import {MatCardModule} from "@angular/material/card";
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {NgbCarouselModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgImageSliderModule} from "ng-image-slider";
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import {CarouselModule, MDBBootstrapModule} from "angular-bootstrap-md";
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    UsersComponent,
    UserComponent,
    ApartmentsComponent,
    ApartmentComponent,
    RegisterComponent,
    ApartmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSliderModule,
    NgbCarouselModule,
    NgbModule,
    NgImageSliderModule,
    CarouselModule,
    MDBBootstrapModule,
    MatSelectModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    multi:true,
    useClass:MainInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
