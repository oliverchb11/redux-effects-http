import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Datum } from 'src/app/interfaces/usuario-response-all.interface';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy{

  public usuarios: Usuario[] = []
  private store = inject(Store<AppState>);
  private unSubs!: Subscription;
  public loading = false

  ngOnInit(): void {
   this.getAllUsers()
   this.unSubs = this.store.select('usuarios').subscribe((data) => {
    console.log(data);
    this.usuarios = data.users;
    this.loading = data.loading
   })
  }

  private getAllUsers (): void{
    this.store.dispatch(cargarUsuarios())
  }

  ngOnDestroy(): void {
    this.unSubs.unsubscribe()
  }



}
