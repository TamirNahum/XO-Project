import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/services/countryService.service';
import { Country } from '../shared/models/country.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

countriesArray:any;

  constructor(private myCountriesService:CountryService ) {}

  ngOnInit() {
    this.countriesArray=this.myCountriesService.countryInfo;
  }

}
