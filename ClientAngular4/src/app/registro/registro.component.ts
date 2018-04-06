import { Component, OnInit } from '@angular/core';

import { PeliculaService } from './shared/pelicula.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[PeliculaService]
})
export class RegistroComponent implements OnInit {

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit() {
  }

}
