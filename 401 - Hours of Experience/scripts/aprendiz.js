export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bachillerato";
    NivelEducativo["UNIVERSITARIO"] = "Universitario";
    NivelEducativo["POSGRADO"] = "Posgrado";
    NivelEducativo["DOCTOR"] = "Doctor";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, apellidos, avatar, edad, nivelEducativo, cursos, carreras, trabajos) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        this.cursos = cursos;
        this.carreras = carreras;
        this.trabajos = trabajos;
    }
    Aprendiz.prototype.darCursosCertificados = function () {
        var totalCursosC = this.cursos.length;
        return totalCursosC;
    };
    return Aprendiz;
}());
export { Aprendiz };
