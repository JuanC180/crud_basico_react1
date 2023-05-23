import { useState } from 'react'
import Alerta from './Alerta'
import axios from 'axios';

const Principal = () => {

  const [codigo, setCodigo] = useState('')
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [estado, setEstado] = useState('')
  const [precio, setPrecio] = useState('')

  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()

    if ([codigo, nombre, descripcion, estado, precio].includes()) {
      setAlerta({ msg: "hay campos vacios", error: true });
      return;
    }


    setAlerta({})

    // crear el producto
    try {
      const url = "http://localhost:4000/api/productos"
      await axios.post(url, { codigo, nombre, descripcion, estado, precio })
      setAlerta({
        msg: "Creado Correctamente",
        error: false
      })
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }

  }

  const { msg } = alerta

  return (
    <>
      <main className="container-fluid vh-100">
        <div className="row vh-100" id="row-central">
          <div className="icon__menu pt-3 pb-0" id="icon__menu">
            <i className="fas fa-bars" id="btn_open"></i>
          </div>

          <section className="pb-5" id="sectionID">
            <h1 className="text-center py-5 pt-0 my-0">CREAR PRODUCTO </h1>

            {msg && <Alerta alerta={alerta} />}


            <form
              action="d-flex justify-content-center flex-column "
              onSubmit={handleSubmit}
            >

              <div className="contenedores d-flex justify-content-center flex-xl-row flex-column  flex-sm-column mx-5 gap-5">
                <div className="contenedores__div1 d-flex flex-column align-items-center ms-sm-0 w-100 ">
                  <div className="mb-3 w-100">
                    <label for="codigo" className="form-label fw-bold">Código</label>
                    <input
                      type="text"
                      className="form-control"
                      id="codigo"
                      aria-describedby="emailHelp"
                      placeholder="Código" required
                      value={codigo}
                      onChange={e => setCodigo(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 w-100">
                    <label for="nombre" className="form-label fw-bold">Nombre</label>
                    <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Nombre" required
                      value={nombre}
                      onChange={e => setNombre(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 w-100">
                    <label for="descripcion" className="form-label fw-bold">Descripción</label>
                    <input type="text" className="form-control" id="descripcion" aria-describedby="emailHelp" placeholder="Descripción" required
                      value={descripcion}
                      onChange={e => setDescripcion(e.target.value)}
                    />
                  </div>
                </div>

                <div className="contenedores__div2 d-flex flex-column align-items-center me-5 me-sm-0  w-100 ">
                  <div className="mb-3 w-100">
                    <label for="estado" className="form-label fw-bold">Estado</label>
                    <input type="text" className="form-control" id="estado" placeholder="estado" required
                      value={estado}
                      onChange={e => setEstado(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 w-100">
                    <label for="precio" className="form-label fw-bold">Precio</label>
                    <input type="text" className="form-control" id="precio" aria-describedby="emailHelp" placeholder="Precio" required
                      value={precio}
                      onChange={e => setPrecio(e.target.value)}
                    />
                  </div>
                </div>
              </div>


              <div className="contenedor__botones d-flex justify-content-center flex-xl-row flex-column flex-sm-column my-3 mx-5 gap-5 ">
                <div className="d-flex justify-content-center  w-100">
                  <div className="div_botones ms-sm-0  w-100">
                    <button type="submit" className="btn btn-dark w-100 btn-styles">Enviar</button>
                  </div>
                </div>

                <div className="d-flex justify-content-center w-100">
                  <div className="div_botones  me-sm-0  w-100">
                    <button type="reset" className="btn btn-dark w-100 btn-styles">Limpiar</button>
                  </div>
                </div>
              </div>
            </form>

          </section>
        </div>
      </main>
    </>
  )
}

export default Principal