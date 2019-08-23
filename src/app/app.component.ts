import { Component, OnInit } from '@angular/core';
import { PaisService } from './paises/pais/pais.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
    
  constructor(private paisService: PaisService) { }
    lists: any;
    
    ngOnInit(): void {
      this.getPaises();
    }

    getPaises(){
      this.paisService.list().subscribe(response => {
        this.lists = response;
      });
    }
}
