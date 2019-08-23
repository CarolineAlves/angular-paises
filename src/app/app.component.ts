import { Component, OnInit } from '@angular/core';
import { PaisService } from './paises/pais/pais.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  
  paises: any[] = []; 
  
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService
    .list()
    .subscribe(paises => this.paises = paises);
  }


}
