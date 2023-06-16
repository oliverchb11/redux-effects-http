import {  Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from "../actions";
import { exhaustMap, map, tap, catchError, of, delay } from "rxjs";
import { UsuariosService } from "src/app/services/usuarios.service";

@Injectable()
export class UsuariosEffects {

    private actions$ = inject(Actions);
    private usuariosService = inject(UsuariosService);

     cargarUsuarios$ = createEffect((): any =>this.actions$
     .pipe(
       ofType(cargarUsuarios),
       exhaustMap(() => this.usuariosService.getUsersAll()
         .pipe(
          delay(5000),
           map(users => cargarUsuariosSuccess({usuarios: users})),
           catchError( error => of(cargarUsuariosError({payload: error})))
         )
       )
     )
   );

}