import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import {cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess} from '../actions'


export interface UsuariosState {
    users: Usuario[]; 
    loaded: boolean;
    loading: boolean;
    error: any
}

export const usuariosInitialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

const _usuarioReducer = createReducer(usuariosInitialState,

    on(cargarUsuarios, state => ({ ...state, loading: true})),
    on(cargarUsuariosSuccess, (state, {usuarios}) => ({ ...state, loading: false, loaded: true, users: [...usuarios]})),
    on(cargarUsuariosError, (state, {payload}) => ({ ...state, loading: false, loaded: false, error: payload})),

);

export function usuariosReducer(state: any, action: any) {
    return _usuarioReducer(state, action);
}