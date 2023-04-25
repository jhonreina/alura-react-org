import { useState } from "react";
import React from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;

  const manejoEnvio = (e) => {
    e.preventDefault();
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo
    }
    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color});
  }

  return (
    <section className="formulario">
      <form onSubmit={manejoEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar Nombre"
          required
          valor={nombre}
          actualizarValor={setNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar Puesto"
          required
          valor={puesto}
          actualizarValor={setPuesto} />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={setFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={setEquipo}
          equipos={props.equipos} />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required
          valor={titulo}
          actualizarValor={setTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar Color HEX"
          required
          valor={color}
          actualizarValor={setColor}
          type="color" />
            
        <Boton>Crear Equipo</Boton>
        </form>
    </section>
  );
};

export default Formulario;
