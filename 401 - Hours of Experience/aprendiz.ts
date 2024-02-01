import {Curso} from './curso.js';
import {Carrera} from './carrera.js';
import {Trabajo} from './trabajo.js';

export enum NivelEducativo{
    BACHILLERATO = "Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSGRADO = "Posgrado",
    DOCTOR = "Doctor"
}

export class Aprendiz{

    constructor(public nombres: string,
                public apellidos: string,
                public avatar: string,
                public edad: number,
                public nivelEducativo: NivelEducativo,
                public cursos: Curso[],
                public carreras: Carrera[],
                public trabajos: Trabajo[])
    {

    }

    public darCursosCertificados():number{
        let totalCursosC: number = this.cursos.length;
        return totalCursosC;
    }
}