import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
import { Carrera } from './carrera.js';
import { Trabajo } from './trabajo.js';
var cursos = [new Curso("Applied Data Science with Python Specialization", 140, "Python", "University of Michigan", 2023),
    new Curso("Software Design and Architecture Specialization", 50, "Java", "University of Alberta", 2023),
    new Curso("Data Structures and Algorithms Specialization", 59, "C++", "University of Illinois", 2022),
    new Curso("Software Testing and Automation Specialization", 95, "Java / JUnit", "University of Minnesota", 2020)];
var carreras = [new Carrera("Doctorado en Multimedia y Comunicaciones", 4, 4 * 1200, "UC3M", 2023),
    new Carrera("Ciencias Empresariales", 3, 3 * 1200, "UNED", 2013),
    new Carrera("Ciencias Matemáticas", 5, 5 * 1200, "UNED", 2010),
    new Carrera("Ingeniería Técnica en Telecomunicaciones, esp. Sistemas de Telecomunicación", 3, 3 * 1200, "UC3M", 2005)];
var trabajos = [new Trabajo("Arquitecto Software", 14, 15 * 1600, "AdI", 2009),
    new Trabajo("Profesor Asociado (Telecomunicaciones)", 3, 3 * 500, "UC3M", 2017),
    new Trabajo("Traductor", 4, 4 * 1600, "UNED", 2005),
    new Trabajo("Desarrollador Software", 1, 1 * 1600, "Telvent", 2004),
    new Trabajo("Desarrollador C++ (Beca)", 1, 1 * 1600, "UC3M", 2003)];
export var ap = new Aprendiz("Diego", "Méndez Romero", "avatar.png", 39, NivelEducativo.DOCTOR, cursos, carreras, trabajos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
var carrerasTable = document.getElementById("carreras");
var cursosTable = document.getElementById("cursos");
var btnFiltro = document.getElementById("boton-filtro");
var textoBusqueda = document.getElementById("texto-busqueda");
btnFiltro.onclick = filtrarPorNombre;
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCarreras(ap.carreras);
mostrarCursosAprendiz(ap.cursos);
function filtrarPorNombre() {
    var text = textoBusqueda.value;
    text = (text == null) ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    mostrarCursosAprendiz(cursosFiltrados);
}
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" width=\"150\" height=\"150\"></td></tr>\n    <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n    <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n    <tr><td>Nivel educativo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n    <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var totalHoras = calcularHorasTotales(ap);
    var trElement1 = document.createElement("tr");
    trElement1.innerHTML = "<td><b>Resolviendo problemas:</b></td><td>".concat(totalHoras, " horas</td>");
    estadisticasTable.append(trElement1);
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement2 = document.createElement("tr");
    trElement2.innerHTML = "<td><b>Cursos certificados:</b></td><td>".concat(numeroCertificados, "</td>");
    estadisticasTable.append(trElement2);
}
function mostrarCarreras(carreras) {
    var carrerasTbody = document.createElement("tbody");
    var index = 0;
    for (var _i = 0, carreras_1 = carreras; _i < carreras_1.length; _i++) {
        var carrera = carreras_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(carrera.nombre, "</td>\n        <td>").concat(carrera.duracion, "</td>\n        <td>").concat(carrera.horas, "</td>\n        <td>").concat(carrera.universidad, "</td>\n        <td>").concat(carrera.anio, "</td>");
        carrerasTbody.appendChild(trElement);
        index++;
    }
    carrerasTable.appendChild(carrerasTbody);
}
function mostrarCursosAprendiz(cursos) {
    var cursosTbody = document.createElement("tbody");
    var index = 0;
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(curso.nombre, "</td>\n        <td>").concat(curso.horas, "</td>\n        <td>").concat(curso.tech, "</td>\n        <td>").concat(curso.entity, "</td>\n        <td>").concat(curso.anio, "</td>");
        cursosTbody.appendChild(trElement);
        index++;
    }
    cursosTable.appendChild(cursosTbody);
}
function calcularHorasTotales(aprendiz) {
    var totalHorasCursos = aprendiz.cursos.reduce(function (sum, curso) { return sum + curso.horas; }, 0);
    var totalHorasCarreras = aprendiz.carreras.reduce(function (sum, carrera) { return sum + carrera.horas; }, 0);
    var totalHorasTrabajos = aprendiz.trabajos.reduce(function (sum, trabajo) { return sum + trabajo.horas; }, 0);
    return totalHorasCursos + totalHorasCarreras + totalHorasTrabajos;
}
