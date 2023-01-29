import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './Components/auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './Components/main/main.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProfileComponent } from './Components/profile/profile.component'
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
