import { Route, NavLink, Routes, useParams } from 'react-router-dom';

const Proyecto = () => {
    let params=useParams()
    const {proyecto_id}=params
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
                    <NavLink activeClassName='activado' exact to={'/portafolio/proyecto-1'}>Proyecto1</NavLink>
                </li>
                <li>
                    <NavLink style={{fontSize: 30}} exact to={"/portafolio/proyecto-2"}>Proyecto2</NavLink>
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
            <NavLink exact to='/'>Inicio</NavLink>
          </li>
          <li>
            <NavLink isActive={(match, location)=>{}} exact to='/portafolio'>Portafolio</NavLink>
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
