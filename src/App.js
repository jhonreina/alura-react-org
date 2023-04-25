import { useState } from 'react';
import { v4 as uuid } from "uuid";

import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav:false,
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false,
    },
  ]);
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSegundario: "#d9f7e9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSegundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSegundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSegundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSegundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSegundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSegundario: "#FFEEDF",
    },
  ]); 
  // Ternario ----> condicion ? seMuestra : 
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

 
  // registrat Colaborador

  const registrarColaborador = (colaborador) => {
    console.log('Nuevo colaborador', colaborador);
    // Spread operador
    setColaboradores([...colaboradores, colaborador])
  }

  // Eliminar colaborador 

  const eliminarColaborador = (id) => {
    console.log("eliminar", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevosColaboradores);
  }

  // actualizar color de equipos
  const actualizarColor = (color, id) => {
    console.log("actulizado:", color, id);
    const equiposActualizados = equipos.map((equipo) => {
        if (equipo.id === id) {
          equipo.colorPrimario = color;
        }
      return equipo;
    })

    setEquipos(equiposActualizados)
  }

//crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    setEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
  }

//Favoritos
  
  const like = (id) => {
    console.log("like",id)
    const likeActualizado = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
     setColaboradores(likeActualizado)
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario  ? <Formulario /> : <> </> } */}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          like={like}
        />
      ))}
      <Footer/>
    </div>
  );
}

export default App;
