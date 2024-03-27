import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget'
import '../App.css'

export default function NavBar({}) {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><Link className="deco" to={'/'}>Compu Venta</Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#"><Link className="deco" to={'/productos'}>Productos</Link></a>
        <a className="nav-link" href="#">Contacto</a>

      </div>
    </div>
  </div>
  <div> <CartWidget/> </div>
</nav>


    </>
  );
}
