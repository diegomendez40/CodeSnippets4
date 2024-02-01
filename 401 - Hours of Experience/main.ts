import {Aprendiz, NivelEducativo} from './aprendiz.js';
import {Curso} from './curso.js';
import {Carrera} from './carrera.js';
import {Trabajo} from './trabajo.js';

let cursos = [new Curso("Applied Data Science with Python Specialization", 140, "Python", "University of Michigan", 2023),
new Curso("Software Design and Architecture Specialization", 50, "Java", "University of Alberta", 2023),
new Curso("Data Structures and Algorithms Specialization", 59, "C++", "University of Illinois", 2022),
new Curso("Software Testing and Automation Specialization", 95, "Java / JUnit", "University of Minnesota", 2020)];

let carreras = [new Carrera("Doctorado en Multimedia y Comunicaciones", 4, 4*1200, "UC3M", 2023),
new Carrera("Ciencias Empresariales", 3, 3*1200, "UNED", 2013),
new Carrera("Ciencias Matemáticas", 5, 5*1200, "UNED", 2010),
new Carrera("Ingeniería Técnica en Telecomunicaciones, esp. Sistemas de Telecomunicación", 3, 3*1200, "UC3M", 2005)];

let trabajos = [new Trabajo("Arquitecto Software", 14, 15*1600, "AdI", 2009),
new Trabajo("Profesor Asociado (Telecomunicaciones)", 3, 3*500, "UC3M", 2017),
new Trabajo("Traductor", 4, 4*1600, "UNED", 2005),
new Trabajo("Desarrollador Software", 1, 1*1600, "Telvent", 2004),
new Trabajo("Desarrollador C++ (Beca)", 1, 1*1600, "UC3M", 2003)];

export const ap = new Aprendiz("Diego", "Méndez Romero", "avatar.png", 39, NivelEducativo.DOCTOR, cursos, carreras, trabajos);
console.log(ap.cursos);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;
let carrerasTable: HTMLElement = document.getElementById("carreras")!;
let cursosTable: HTMLElement = document.getElementById("cursos")!;
let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;
let textoBusqueda: HTMLInputElement = <HTMLInputElement>document.getElementById("texto-busqueda")!;

btnFiltro.onclick = filtrarPorNombre;

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCarreras(ap.carreras);
mostrarCursosAprendiz(ap.cursos);

function filtrarPorNombre():void{
    let text:string = textoBusqueda.value;
    text = (text==null)?"":text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[] = ap.cursos.filter(function(c){return c.nombre.match(text);});
    mostrarCursosAprendiz(cursosFiltrados);

}


function mostrarDatosAprendiz(aprendiz: Aprendiz):void{
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${aprendiz.avatar}" width="150" height="150"></td></tr>
    <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`
    aprendizTable.appendChild(tbodyAprendiz);
}

function mostrarEstadisticas(aprendiz: Aprendiz):void{
    let totalHoras = calcularHorasTotales(ap);
    let trElement1:HTMLElement = document.createElement("tr");
    trElement1.innerHTML = `<td><b>Resolviendo problemas:</b></td><td>${totalHoras} horas</td>`;
    estadisticasTable.append(trElement1);

    let numeroCertificados: number = aprendiz.darCursosCertificados();
    let trElement2:HTMLElement = document.createElement("tr");
    trElement2.innerHTML = `<td><b>Cursos certificados:</b></td><td>${numeroCertificados}</td>`;
    estadisticasTable.append(trElement2);
}

function mostrarCarreras(carreras: Carrera[]): void{
    let carrerasTbody: HTMLElement = document.createElement("tbody");
    let index: number = 0;
    for(let carrera of carreras)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${carrera.nombre}</td>
        <td>${carrera.duracion}</td>
        <td>${carrera.horas}</td>
        <td>${carrera.universidad}</td>
        <td>${carrera.anio}</td>`
        carrerasTbody.appendChild(trElement);
        index++;
    }
    carrerasTable.appendChild(carrerasTbody);
}

function mostrarCursosAprendiz(cursos: Curso[]): void{
    let cursosTbody: HTMLElement = document.createElement("tbody");
    let index: number = 0;
    for(let curso of cursos)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td>${curso.tech}</td>
        <td>${curso.entity}</td>
        <td>${curso.anio}</td>`
        cursosTbody.appendChild(trElement);
        index++;
    }
    cursosTable.appendChild(cursosTbody);
}

function calcularHorasTotales(aprendiz: Aprendiz): number {
    let totalHorasCursos = aprendiz.cursos.reduce((sum, curso) => sum + curso.horas, 0);
    let totalHorasCarreras = aprendiz.carreras.reduce((sum, carrera) => sum + carrera.horas, 0);
    let totalHorasTrabajos = aprendiz.trabajos.reduce((sum, trabajo) => sum + trabajo.horas, 0);

    return totalHorasCursos + totalHorasCarreras + totalHorasTrabajos;
}
