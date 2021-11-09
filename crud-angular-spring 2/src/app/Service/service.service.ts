import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Clientes } from '../Modelo/Clientes';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  constructor(private http: HttpClient) { }
  url = 'http://localhost:8080/exemplo01/clientes';

  getClientes(){
    return this.http.get<Clientes[]>(this.url);
  }

}
