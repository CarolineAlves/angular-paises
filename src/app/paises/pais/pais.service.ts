import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


const API = 'https://restcountries.eu/rest/v2/all';

@Injectable({ providedIn: 'root' })
export class PaisService {

    constructor(private http: HttpClient) {}

    list() {
        return this.http
            .get<any>(API);       
    }
}
