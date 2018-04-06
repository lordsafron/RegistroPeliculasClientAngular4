import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Pelicula } from './pelicula.model';

@Injectable()
export class PeliculaService {

  selectedPelicula : Pelicula;
  peliculaList : Pelicula[];
  constructor(private http : Http) { }

  postPelicula(pelicula : Pelicula){
    var body = JSON.stringify(pelicula);
    console.log(body);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post('http://localhost:5555/pelicula',body, requestOptions).map(x => x.json());
  }

  putPelicula(id, pelicula){
    var body = JSON.stringify(pelicula);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Put, headers: headerOptions});
    return this.http.put('http://localhost:5555/pelicula/' + id ,body, requestOptions).map(res => res.json());
  }

  getPeliculaList(){
    this.http.get('http://localhost:5555/pelicula')
    .map((data : Response) => {
      console.log(data);
      return data.json() as Pelicula[];
    }).toPromise().then(x => {
      this.peliculaList = x;
    })
  }

  deletePelicula(id:number){
    return this.http.delete('http://localhost:5555/pelicula/' + id).map(res => res.json());
  }
}
