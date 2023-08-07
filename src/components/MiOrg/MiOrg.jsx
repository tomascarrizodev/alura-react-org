import './MiOrg.css';
import Add from '/img/add.png';

const MiOrg = ({ hideForm }) => {
    return (
        <section className='org-section'>
            <h3 className='title'>Mi Organización</h3>
            <img onClick={hideForm} src={Add} alt='Añadir Participante' />
        </section>
    )
}

export default MiOrg;