import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PeliculaService } from '../shared/pelicula.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  constructor(private peliculaService: PeliculaService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.peliculaService.selectedPelicula = {
      userId: null,
      id: null,
      title: '',
      body: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      console.log('form.value.id' + form.value.id);
      this.peliculaService.postPelicula(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.peliculaService.getPeliculaList();
          this.toastr.success('Nueva pelicula agregada satisfactoriamente', 'Registro Peliculas');
        })
    } else {
      this.peliculaService.putPelicula(form.value.id, form.value)
      .subscribe(data => {
        this.resetForm();
        this.peliculaService.getPeliculaList();
        this.toastr.info('Pelicula actualizada con éxito!', 'Registro Peliculas');
      });
    }
  }


}