import { Data } from "../interfaces/usuario-response.interface";

export class Usuario {

    constructor(
        public id: number,
        public first_name: string,
        public email: string,
        public last_name: string,
        public avatar: string,

        ){}
}