import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { AppRoutingModule } from './app-routing.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DarkModeToggleComponent,
    // Other components, directives, and pipes
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    // Add other modules imported here (e.g., FormsModule, HttpClientModule, RouterModule)
  ],
  providers: [],
})
export class AppModule {
  constructor() {
    bootstrapApplication(AppComponent, { providers: [] })
      .catch((err: any) => console.error(err));
  }
}
