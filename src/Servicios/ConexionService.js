import axios from "axios";

const PROYECTO_BASE = "http://217.77.12.236:8085/Proyectos";
const EQUIPO_BASE = "http://217.77.12.236:8085/Equipos/Proyectos";
const AÑADE_EQUIPO = "http://217.77.12.236:8085/Equipo";
const AÑADE_PROYECTO = "http://217.77.12.236:8085/Proyecto";
const AUDITORIA = "http://217.77.12.236:8085/auditoria";

class ConexionService {
    getAllProyectos() {
        return axios.get(PROYECTO_BASE);
    }

    getAllProgreso() {
        return axios.get(AUDITORIA);
    }

    getAllEquipos() {
        return axios.get(EQUIPO_BASE);
    }

    addEquipos(equipo) {
        return axios.post(AÑADE_EQUIPO, equipo);
    }

    addProyecto(proyecto) {
        return axios.post(AÑADE_PROYECTO, proyecto);
    }

    actualizarProgreso(id, progresoDTO) {
        return axios.post(`${PROYECTO_BASE}/${id}/progreso`, progresoDTO);
    }
}

export default new ConexionService();
