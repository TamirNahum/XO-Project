import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CountryService } from './shared/services/countryService.service';
import { CountriesComponentComponent } from './countries-component/countries-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponentComponent },
  { path: 'Countries', component: CountriesComponentComponent },
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
},
{ path: '**', component: HeaderComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CountriesComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
