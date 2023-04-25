import Colaborador from '../Colaborador';
import './Equipo.css'
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
    // Destructuracion
    const { colorPrimario, titulo,id} = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    console.log(colaboradores.length > 0);
    const fondo = {backgroundColor: hexToRgba(colorPrimario, 0.4)}

    const colorTitulo = {borderColor: colorPrimario}

    return (
      <>
        {colaboradores.length > 0 && (
          <section className="equipo" style={fondo}>
            <input
              type="color"
              className="input__color"
              value={colorPrimario}
              onChange={(e) => {
                actualizarColor(e.target.value, id);
              }}
            ></input>

            <h3 style={colorTitulo}>{titulo}</h3>
            <div className="colaboradores">
              {colaboradores.map((colaborador, index) => (
                <Colaborador
                  datos={colaborador}
                  key={index}
                  colorPrimario={colorPrimario}
                  eliminarColaborador={eliminarColaborador}
                  like={like}
                />
              ))}
            </div>
          </section>
        )}
      </>
    );
}

export default Equipo