import { Component, OnInit, OnChanges } from '@angular/core';
import { CountryService } from '../shared/services/countryService.service';
import { Country } from '../shared/models/country.model';

@Component({
  selector: 'app-countries-component',
  templateUrl: './countries-component.component.html',
  styleUrls: ['./countries-component.component.css']
})
export class CountriesComponentComponent implements OnInit,OnChanges {
  currentLetter: string = "";
  countriesArray: any;
  currentCoutriesArray:Array<Country>;

  constructor(private myCountriesService: CountryService) {
    
  }

  ngOnInit() {
    
    this.countriesArray = this.myCountriesService.countryInfo;
   this.currentCoutriesArray=this.countriesArray.data;
    
  }
  ngOnChanges(){
    this.setNewArr();
  }

  public setNewArr(): void {
    this.currentCoutriesArray=[];
    console.log("a");
  if(this.currentLetter==""){
    for (let i of  this.countriesArray.data) {
      this.currentCoutriesArray.push(i);
    }
  }
  else{  
     for (let i of  this.countriesArray.data) {
    if(i.name.includes(this.currentLetter)||i.capital.includes(this.currentLetter))
    this.currentCoutriesArray.push(i);
  }
}


    }
  }



