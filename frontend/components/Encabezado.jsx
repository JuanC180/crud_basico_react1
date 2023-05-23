import React from 'react'

const Encabezado = () => {
  return (
    <>
      <header className="py-0 ">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid mx-sm-1 mx-1 mx-lg-5">

            <a className="navbar-brand" href="#">
              <img id="imgLogo" src="https://www.novomatic.com/themes/novomatic/images/novomatic_n.svg" alt="Bootstrap" width="45" height="45" />
            </a>
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
              <ul className="navbar-nav d-flex justify-content-center align-items-center gap-1 gap-lg-4 my-2">
                <li className="nav-item hover-header py-2 ">
                  <a className="text-decoration-none text-white " href="./loginNovo.html">
                    Cerrar Sesión
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Encabezado