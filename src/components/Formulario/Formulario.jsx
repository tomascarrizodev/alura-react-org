import { useState } from 'react';
import Boton from '../Boton/Boton';
import Campo from '../Campo';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import './Formulario.css';

const Formulario = ({ equipos, registrarColaborador, crearEquipo }) => {
    const [nombre, setNombre] = useState('');
    const [puesto, setPuesto] = useState('');
    const [foto, setFoto] = useState('');
    const [equipo, setEquipo] = useState('');

    const [titulo, setTitulo] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const datos = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datos)
    }

    const handleNuevoEquipo = e => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }
    
    return (
        <section className='formulario'>
            <form onSubmit={handleSubmit}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <Campo value={nombre} setValue={setNombre} titulo='Nombre' placeholder='Ingrese el nombre' required />
                <Campo value={puesto} setValue={setPuesto} titulo='Puesto' placeholder='Ingrese el puesto' required />
                <Campo value={foto} setValue={setFoto} titulo='Foto' placeholder='Ingrese url de la foto' required />
                <ListaOpciones equipos={equipos} equipo={equipo} setEquipo={setEquipo} />
                <Boton>Crear</Boton>
            </form>
            <form onSubmit={handleNuevoEquipo}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <Campo value={titulo} setValue={setTitulo} titulo='Título' placeholder='Ingrese el título' required />
                <Campo type='color' value={color} setValue={setColor} titulo='Color' placeholder='Ingrese el color en Hex' required />
                <Boton>Registrar Equipo</Boton>
            </form>
        </section>
    )
}

export default Formulario