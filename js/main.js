class Partidos {
    constructor(numeroFecha, fecha, equipo, resultados) {
        this.numeroFecha = numeroFecha
        this.fecha = fecha
        this.equipo = equipo
        this.resultados = resultados

}
}


Partidos.prototype.mensaje = function () {
    console.log(this.numeroFecha + ' ' + 'Fecha: ' + this.fecha + ' '+ 'Se enfrentaron los equipos: ' + this.equipo + ' '+ 'Y los resultados fueron: ' + this.resultados)
}






const partido1 = new Partidos(1, '10/02/2023', 'Gimnasia y Esgrima (Jujuy) - Ferro', '1 - 1')
const partido2 = new Partidos(2, '17-02-2023', 'Ferro - Quilmes', '2 - 3')
const partido3 = new Partidos(3, '25-02-2023', 'Brown - Ferro', '1 - 1')
const partido4 = new Partidos(4, '04-03-2023', 'Ferro - Estudiantes', '0 - 2')
const partido5 = new Partidos(5, '10-03-2023', 'Atlético de Rafaela - Ferro', '1 - 2')
const partido6 = new Partidos(6, '17-03-2023', 'Ferro - Deportivo Madryn', '0 - 0')
const partido7 = new Partidos(7, '25-03-2023', 'Villa Dálmine - Ferro', '2 - 0')
const partido8 = new Partidos(8, '02-04-2023', 'Ferro - Deportivo Maipú (Mendoza)', '0 - 1')
const partido9 = new Partidos(9, '08-04-2023', 'Independiente Rivadavia (Mendoza) - Ferro', '2 - 1')
const partido10 = new Partidos(10, '16-04-2023', 'Ferro - Chaco For Ever', '2 - 1')
const partido11 = new Partidos(11, '23-04-2023', 'Mitre (Santiago del Estero) - Ferro', '0 - 2')
const partido12 = new Partidos(12, '30-04-2023', 'Ferro - Chacarita Juniors', '0 - 0')
const partido13 = new Partidos(13, '06-05-2023', 'Tristán Suárez - Ferro', '2 - 4')
const partido14 = new Partidos(14, '14-05-2023', 'Ferro - Atlanta', '2 - 0')
const partido15 = new Partidos(15, '22-05-2023', 'Racing (Córdoba) - Ferro', 'Por definirse')
const partido16 = new Partidos(16, 'Por definirse', 'Ferro - Deportivo Riestra', 'Por definirse')
const partido17 = new Partidos(17, 'Por definirse', 'Aldosivi (Mar del Plata) - Ferro', 'Por definirse')
const partido18 = new Partidos(18, 'Por definirse', 'Ferro - Gimnasia y Esgrima (Jujuy)', 'Por definirse')
const partido19 = new Partidos(19, 'Por definirse', 'Quimes - Ferro', 'Por definirse')
const partido20 = new Partidos(20, 'Por definirse', 'Estudiantes - Ferro', 'Por definirse')
const partido21 = new Partidos(21, 'Por definirse', 'Ferro - Atlético de Rafaela', 'Por definirse')
const partido22 = new Partidos(22, 'Por definirse', 'Deportivo Madryn - Ferro', 'Por definirse')
const partido23 = new Partidos(23, 'Por definirse', 'Ferro - Villa Dálmine', 'Por definirse')
const partido24 = new Partidos(24, 'Por definirse', 'Deportivo Maipú (Mendoza) - Ferro', 'Por definirse')
const partido25 = new Partidos(25, 'Por definirse', 'Ferro - Independiente Rivadavia (Mendoza)', 'Por definirse')
const partido26 = new Partidos(26, 'Por definirse', 'Chaco For Ever - Ferro', 'Por definirse')
const partido27 = new Partidos(27, 'Por definirse', 'Ferro - Mitre (Santiago del Estero)', 'Por definirse')
const partido28 = new Partidos(28, 'Por definirse', 'Chacarita Juniors - Ferro', 'Por definirse')
const partido29 = new Partidos(29, 'Por definirse', 'Ferro - Tristán Suárez', 'Por definirse')
const partido30 = new Partidos(30, 'Por definirse', 'Atlanta - Ferro', 'Por definirse')
const partido31 = new Partidos(31, 'Por definirse', 'Ferro - Racing (Córdoba)', 'Por definirse')
const partido32 = new Partidos(32, 'Por definirse', 'Deportivo Riestra - Ferro', 'Por definirse')
const partido33 = new Partidos(33, 'Por definirse', 'Ferro - Aldosivi (Mar del Plata)', 'Por definirse')

partido1.mensaje()
partido2.mensaje()
partido3.mensaje()
partido4.mensaje()
partido5.mensaje()
partido6.mensaje()
partido7.mensaje()
partido8.mensaje()
partido9.mensaje()
partido10.mensaje()
partido11.mensaje()
partido12.mensaje()
partido13.mensaje()
partido14.mensaje()
partido15.mensaje()
partido16.mensaje()
partido17.mensaje()
partido18.mensaje()
partido19.mensaje()
partido20.mensaje()
partido21.mensaje()
partido22.mensaje()
partido23.mensaje()
partido24.mensaje()
partido25.mensaje()
partido26.mensaje()
partido27.mensaje()
partido28.mensaje()
partido29.mensaje()
partido30.mensaje()
partido31.mensaje()
partido32.mensaje()
partido33.mensaje()


