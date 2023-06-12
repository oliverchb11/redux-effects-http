import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ResponseUser } from '../interfaces/usuario-response.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private http = inject(HttpClient)
  constructor() { }


  public getUserById(id: string): Observable<ResponseUser>{
    return this.http.get<ResponseUser>(`${environment.API_PATH}users/${id}`)
  }
}
