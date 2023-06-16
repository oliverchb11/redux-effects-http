import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuarios = createAction('[USUARIOS] Cargar usuarios');
export const cargarUsuariosSuccess = createAction('[USUARIOS] Cargar usuarios Success', props<{usuarios: Usuario[]}>());
// export const cargarUsuariosP = createAction('[USUARIOS] Cargar usuarios prueba');
export const cargarUsuariosError = createAction('[USUARIOS] Cargar usuarios Error', props<{payload: any}>());