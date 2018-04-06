import { Component, OnInit } from '@angular/core';

import { PeliculaService } from '../shared/pelicula.service';
import { Pelicula } from '../shared/pelicula.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {

  constructor(private peliculaService: PeliculaService, private toastr : ToastrService) { }

  ngOnInit() {
    this.peliculaService.getPeliculaList();
  }

  showForEdit(pelicula : Pelicula){
    this.peliculaService.selectedPelicula = Object.assign({}, pelicula);
  }

  onDelete(id:number){
    if(confirm('¿Estas seguro que desea eliminar esta pelicula?') == true){
      this.peliculaService.deletePelicula(id)
      .subscribe(x => {
        this.peliculaService.getPeliculaList();
        this.toastr.warning('Pelicula eliminada con éxito', 'Registro Peliculas');
      })
    }
  }

}
