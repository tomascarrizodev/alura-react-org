import { useState } from 'react'
import './App.css'
import { v4 as uuid } from "uuid"
import Formulario from './components/Formulario/Formulario'
import Header from './components/Header/Header'
import MiOrg from './components/MiOrg/MiOrg'
import Equipo from './components/Equipo'
import Footer from './components/Footer'

function App() {
  const [showForm, setShowForm] = useState(false);

  const [colaboradores, setColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true 
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }]);

  const [equipos, setEquipos] = useState([
    { id: uuid(), titulo: 'Programación', colorPrimario: '#57C278', colorSecundario: '#D9F7E9' },
    { id: uuid(), titulo: 'Front End', colorPrimario: '#82CFFA', colorSecundario: '#E8F8FF' },
    { id: uuid(), titulo: 'Data Science', colorPrimario: '#A6D157', colorSecundario: '#F0F8E2' },
    { id: uuid(), titulo: 'Devops', colorPrimario: '#E06B69', colorSecundario: '#FDE7E8' },
    { id: uuid(), titulo: 'UX y Diseño', colorPrimario: '#DB6EBF', colorSecundario: '#FAE9F5' },
    { id: uuid(), titulo: 'Móvil', colorPrimario: '#FFBA05', colorSecundario: '#FFF5D9' },
    { id: uuid(), titulo: 'Innovación y Gestión', colorPrimario: '#FF8A29', colorSecundario: '#FFEEDF' }
  ])

  const hideForm = () => {
    setShowForm(!showForm)
  }

  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(colaborador => colaborador.id !== id )
    setColaboradores(nuevosColaboradores)
  }

  const actualizarColor = (id, color) => {
    const equiposActualizados = equipos.map(equipo => {
      if (equipo.id == id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  const favColaborador = (id) => {
    const nuevoFav = colaboradores.map(colaborador => {
      if (colaborador.id === id)
        colaborador.fav = !colaborador.fav
      return colaborador
    })
    setColaboradores(nuevoFav)
  }

  return (
    <>
      <div>
        <Header />
        { 
          showForm && 
            <Formulario 
              registrarColaborador={ registrarColaborador } 
              equipos={equipos.map(equipo => equipo.titulo)}
              crearEquipo={crearEquipo} 
            /> 
        }
        <MiOrg hideForm={hideForm} />
        { 
          equipos.map(equipo => {
            return (
              <Equipo 
                colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} 
                datos={equipo} 
                key={equipo.titulo}
                eliminarColaborador={eliminarColaborador}
                actualizarColor={actualizarColor}
                favColaborador={favColaborador}
              />
            )
          })
        }
        <Footer />
      </div>
    </>
  )
}

export default App
