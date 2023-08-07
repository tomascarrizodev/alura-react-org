import Colaborador from '../Colaborador';
import './Equipo.css';
// TODO: Cambiar a 'tinycolor2' en npm para la función 'lighten' o 'brighten'
import hexToRgba from 'hex-to-rgba';

const Equipo = ({ datos, colaboradores, eliminarColaborador, actualizarColor, favColaborador }) => {

    const styleSection = { backgroundColor: hexToRgba(datos.colorPrimario, '0.45') }

    const styleTitulo = { borderBottom: `4px solid ${datos.colorPrimario}` }

    return (
        <>
            {colaboradores.length > 0 &&
                <section className='equipo' style={ styleSection } >
                    <input
                        type='color'
                        value={ hexToRgba(datos.colorPrimario, '0.45') }
                        className='input-color'
                        onChange={(e) => actualizarColor(datos.id, e.target.value)}
                    />
                    <h3 style={ styleTitulo }>{ datos.titulo }</h3>
                    <div className='colaboradores'>
                        { colaboradores.map((colaborador, index) => <Colaborador 
                            key={ index } 
                            colaborador={ colaborador } 
                            color={ datos.colorPrimario } 
                            eliminarColaborador={ eliminarColaborador }
                            favColaborador={ favColaborador }
                        />) }
                    </div>
                </section> 
            }
        </>
    )
}

export default Equipo;