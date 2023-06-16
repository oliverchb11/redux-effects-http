import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { Data } from 'src/app/interfaces/usuario-response.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  
  private activedRoute = inject(ActivatedRoute);
  private usuarioService = inject(UsuariosService);
  public usuario!: Data | undefined;
  private store = inject(Store<AppState>);
  
  ngOnInit(): void {
    this.getParams()
  }

  private getParams(): void{
    this.activedRoute.params.subscribe(({id}) => {
      this.store.dispatch(cargarUsuario({id: id}))
    })
  }
}
