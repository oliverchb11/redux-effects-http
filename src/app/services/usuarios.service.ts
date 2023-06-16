import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Data, ResponseUser } from '../interfaces/usuario-response.interface';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Datum, ResponseUserAll } from '../interfaces/usuario-response-all.interface';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private http = inject(HttpClient)
  constructor() { }


  public getUsersAll(): Observable<Usuario[]>{
    return this.http.get<ResponseUserAll>(`${environment.API_PATH}users?per_page=8`).pipe(map(user => user.data))
  }
  public getUserById(id: string): Observable<ResponseUser>{
    return this.http.get<ResponseUser>(`${environment.API_PATH}users/${id}`)
  }
}
