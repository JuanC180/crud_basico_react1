import React from 'react'
import { Link } from 'react-router-dom'

const Lateral = () => {
  return (
    <>
      <aside className="col-12 col-md-2 px-0  menu__side " id="menu_side">



        <div className="name__page">
          <i className="">
            <img className="rounded-circle" src="https://e7.pngegg.com/pngimages/164/153/png-clipart-donut-the-simpsons-tapped-out-doughnut-homer-simpson-bart-simpson-krusty-the-clown-donut-food-bagel.png" alt="batman " title="batman" width="40" height="40" />
          </i>

          <h4 className="px-4">Nombre</h4>
        </div>

        <ul className=" d-flex flex-column justify-content-start w-100 px-0 my-0 mx-0 options__menu">

          <Link className="px-5 py-2 border-bottom border-dark d-flex justify-content-start align-items-center" to="/">
            <div className="option">

              <i className="fa-solid fa-box-open" title="Productos"></i>
              <h4 className="my-0">Productos</h4>
            </div>
          </Link>

          <a className="px-5 py-2 border-bottom border-dark" href="listarClientes.html">
            <div className="option">
              <i className="fa-solid fa-user-tie" title="Clientes"></i>
              <h4 className="my-0">Clientes</h4>
            </div>

          </a>

          <a className="px-5 py-2 border-bottom border-dark" href="listarUsuarios.html">
            <div className="option">
              <i className="fa-solid fa-user" title="Usuarios"></i>
              <h4 className="my-0">Usuarios</h4>
            </div>
          </a>

          <a className="px-5 py-2 border-bottom border-dark" href="listarVentas.html">
            <div className="option">
              <i className="fa-solid fa-sack-dollar" title="Ventas"></i>
              <h4 className="my-0">Ventas</h4>
            </div>
          </a>

          <a className="px-5 py-2 border-bottom border-dark" href="listarCartera.html">
            <div className="option">
              <i className="fa-solid fa-wallet" title="Cartera"></i>
              <h4 className="my-0">Cartera</h4>
            </div>
          </a>
        </ul>
      </aside>
    </>
  )
}

export default Lateral