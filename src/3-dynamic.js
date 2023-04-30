import { Route, Link, Routes, useParams } from 'react-router-dom';

const Proyecto = () => {
    let params=useParams()
    const {proyecto_id}=params
    console.log(params)
    return (
            <h2>Proyecto {proyecto_id}</h2>
        )
}

//Para mostrar el proyecto que se selecciona en la ruta se debe usar useParams que permite obtener el id del proyecto
//La razon por la que nos regresa undefined es porque no estamos pasando el id del proyecto en la ruta

const Portafolio = () => {
    return (
        <div>
            <h1>Portafolio</h1>
            <ul>
                <li>
                    <Link to={'/portafolio/proyecto-1'}>Proyecto1</Link>
                </li>
                <li>
                    <Link to={"/portafolio/proyecto-2"}>Proyecto2</Link>
                </li>
            </ul>
            <div>
                <Routes>
                    <Route path=":proyecto_id/" element={<Proyecto/>} />
                </Routes>
            </div>
        </div>
        ) 
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/portafolio'>Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
            <Route path="portafolio/*" element={<Portafolio />} />
            <Route exact path='/' element={<h1>Inicio</h1>}>
            </Route>
        </Routes>
      </section> 
    </div>
  ); //exact permite llamar a esa ruta solo cuando sea exacta
}

export default App;
