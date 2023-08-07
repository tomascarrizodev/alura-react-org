import './ListaOpciones.css';

const ListaOpciones = ({ equipos, equipo, setEquipo }) => {

    const handleChange = (e) => {
        setEquipo(e.target.value)
    }

    return (
        <div className='lista-opciones'>
            <label>Equipos</label>
            <select value={ equipo } onChange={handleChange}>
                <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
                { equipos.map((equipo, index) => <option key={ index } value={ equipo } >{ equipo }</option> )}
            </select>
        </div>
    )
}

export default ListaOpciones;