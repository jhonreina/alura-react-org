
import './MiOrg.css';

const MiOrg = (props) => {
    // Estados - Hooks
    // useState()
    // const [NombreVariable,funcionActualizada]=useState(valorInicial)

    // const [mostrar, actualizarMostrar] = useState(true);
    // const manejarClick = () => {
    //     console.log("mostrar/cultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className='orgSection'>
        <h3 className='titulo'>Mi organización</h3>      
        <img src='/img/add.png' alt='add' onClick={props.cambiarMostrar}/>
    </section>
}
export default MiOrg