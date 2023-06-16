import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction('[USUARIOS] Cargar usuario', props<{id: string}>());
export const cargarUsuarioSuccess = createAction('[USUARIOS] Cargar usuario Success', props<{usuario: Usuario}>());
// export const cargarUsuariosP = createAction('[USUARIOS] Cargar usuarios prueba');
export const cargarUsuarioError = createAction('[USUARIOS] Cargar usuario Error', props<{payload: any}>());