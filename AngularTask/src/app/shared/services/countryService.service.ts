import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Country } from "../models/country.model";



@Injectable()
export class CountryService{

    countryInfo:any={data:[]};
  

    constructor(private myHttpClient: HttpClient) {
        this.initCountry();
    }

    initCountry(): void {
        const apiUrl:string=`https://restcountries.eu/rest/v2/all?fields=name;capital;flag;population;nativeName`;
        
        this.myHttpClient.get(apiUrl)
            .subscribe((x: any) => { this.countryInfo.data=x; });


    }
}