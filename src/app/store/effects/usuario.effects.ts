import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsuariosService } from "src/app/services/usuarios.service";
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from "../actions";
import { catchError, exhaustMap, map, of } from "rxjs";


@Injectable()
export class UsuarioEffects {

    private actions$ = inject(Actions);
    private usuariosService = inject(UsuariosService);

    cargarUsuario$ = createEffect(
        (): any => this.actions$
        .pipe(
                ofType(cargarUsuario),
                exhaustMap((action: any) => this.usuariosService.getUserById(action.id)
                .pipe(
                    map( (user: any) => cargarUsuarioSuccess({usuario: user})),
                    catchError( error => of(cargarUsuarioError({payload: error})))
                )
                )
            )
        )
}