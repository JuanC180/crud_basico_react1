import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ListadoProducto from './ListadoProducto'



const TablaProducto = () => {



  const [productos, setProductos] = useState([])



  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const url = "http://localhost:4000/api/productos";
        const { data } = await axios.get(url)


        setProductos(data.producto)


        // console.log(productos)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerProductos()
  }, [])




  // let { msg, ...producto } = productos
  // const produs = producto.producto
  // const demo = new Array(produs)
  // console.log(typeof produs)
  // console.log(demo)
  console.log(productos)

  const d = productos.map(pro => {
    console.log(pro)
  })

  console.log(d)

  // {
  //   productos.map(producto => (
  //     <ListadoProducto
  //       key={producto._id}
  //       producto={producto}
  //     />
  //   ))
  // }

  return (
    <>


      <main className="container-fluid">
        <div className="row">
          {/* <aside className="col-12 col-md-2 px-0  ">
            <div className="d-flex justify-content-center align-items-center gap-3 my-3">

              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>

              <p className="mb-0">Nombre</p>
            </div>
            <ul className=" d-flex flex-column justify-content-center px-0 my-0">

              <a className="px-5 py-2 border-bottom border-dark" href="listarProductos.html">Productos</a>
              <a className="px-5 py-2 border-bottom border-dark" href="listarClientes.html">Clientes</a>
              <a className="px-5 py-2 border-bottom border-dark" href="listarUsuarios.html">Usuarios</a>
              <a className="px-5 py-2 border-bottom border-dark" href="listarVentas.html">Ventas</a>
              <a className="px-5 py-2 border-bottom border-dark" href="listarCartera.html">Cartera</a>

            </ul>
          </aside> */}

          <section className="col-12 col-md-10 my-0 d-flex justify-content-start flex-column">
            <h1 className="text-center py-5 my-0">LISTADO DE PRODUCTOS</h1>


            <div className="my-4">
              <div className="row">
                <div className="col">
                  <Link to="/formulario">
                    <button type="submit" className="btn btn-dark w-50 btn-styles">Agregar nuevo producto</button>
                  </Link>
                </div>
                <div className="col d-flex justify-content-end">
                  <input type="text" className="form-control w-75 rounded-pill" placeholder="Search" aria-label="Last name" />
                </div>
              </div>
            </div>




            <table className="table table-hover mb-5 ">
              <thead className="table-secondary">
                <tr>
                  <th scope="col">Código</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Estado </th>
                  <th scope="col">Estado</th>
                  <th scope="col">Editar</th>
                </tr>
              </thead>


              {productos.map(producto => (
                <ListadoProducto
                  key={producto._id}
                  producto={producto}
                />
              ))}
              <tbody>

                <tr>

                  <th scope="row">



                  </th>

                  <td>

                  </td>
                  <td className="">
                    <div className="form-check form-switch">
                      <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                    </div>
                  </td>
                  <td>
                    <a href="./editarProducto.html">
                      <img src="https://cdn-icons-png.flaticon.com/128/565/565722.png" alt="icono" width="25px" height="25px" />
                    </a>

                  </td>

                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>---</td>
                  <td>---</td>
                  <td>---</td>
                  <td><img src="https://www.novomatic.com/sites/default/files/styles/cabinet_galerie_/public/2022-02/yhhqkCvSCA2lLCw.png?itok=OIi578cY" width="30" height="30" alt="maquina2" /></td>
                  <td>
                    <div className="form-check form-switch">
                      <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                    </div>
                  </td>
                  <td>
                    <a href="./editarProducto.html">
                      <img src="https://cdn-icons-png.flaticon.com/128/565/565722.png" alt="icono" width="25px" height="25px" />
                    </a>

                  </td>
                </tr>
                <tr>
                  <th scope="row">300</th>
                  <td>---</td>
                  <td>---</td>
                  <td>---</td>
                  <td><img src="https://www.novomatic.com/sites/default/files/styles/cabinet_galerie_/public/2022-02/yhhqkCvSCA2lLCw.png?itok=OIi578cY" width="30" height="30" alt="maquina2" /></td>
                  <td>
                    <div className="form-check form-switch">
                      <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                    </div>
                  </td>
                  <td>
                    <a href="./editarProducto.html">
                      <img src="https://cdn-icons-png.flaticon.com/128/565/565722.png" alt="icono" width="25px" height="25px" />
                    </a>

                  </td>
                </tr>
              </tbody>

            </table>


          </section>
        </div >

      </main >


      <>
        <h3 className="text-center">NO HAY PRODUCTOS</h3>
      </>




    </>
  )
}

export default TablaProducto