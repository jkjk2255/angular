import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { ArtformsComponent } from './pages/artforms/artforms.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { SinglepageComponent } from './artforms/singlepage/singlepage.component';


@NgModule({
  declarations: [
    AppComponent,
    
    SignupComponent,
    ContactComponent,
    LoginComponent,
    ArtformsComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    SinglepageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
