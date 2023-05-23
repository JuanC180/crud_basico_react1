import { Link } from 'react-router-dom'
import axios from 'axios';


function ListadoProducto({ producto }) {

  console.log(producto)

  async function eliminar(e, id) {
    e.preventDefault()
    try {
      const url = `http://localhost:4000/api/productos/${id}`;
      console.log(url)
      await axios.delete(url)
    } catch (error) {
      console.log(error)
    }
    console.log("eliminando", id)
  }

  return (
    <>
      <h3>hoa {producto._id} </h3>

      <>





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



          <tbody>
            <tr>
              <th scope="row">{producto.codigo}</th>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
              <td>{producto.estado}</td>
              <td className="">
                <Link to="/">
                  <button type="button" className='btn btn-warning'>Editar</button>
                </Link>
              </td>
              <td>
                {/* <Link to="/productos/{producto._id}"> */}
                <button type="button" onClick={(e) => eliminar(e, producto._id)} className='btn btn-danger'>Eliminar</button>
                {/* </Link> */}

              </td>

            </tr>
            <tr>
              <th scope="row">{producto.nombre}</th>
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
                <Link to="/">
                  <button type="button" className='btn btn-warning'>Editar</button>
                </Link>

              </td>
              <td>
                <Link to="/">
                  <button type="button" className='btn btn-danger'>Eliminar</button>
                </Link>

              </td>
            </tr>
          </tbody>

        </table>


      </>
    </>
  )
}

export default ListadoProducto