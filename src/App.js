import '../src/App.css'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavBar from '../src/Componentes/Navbar';
import Pagina from './Componentes/Pagina';



function App() {
  return (
    <div className='App'>
    <NavBar />
    <Pagina/>
    <div className='pie'>
      <>FOOTER</>
    </div>
    
    </div>
  )
}
export default App;
  






