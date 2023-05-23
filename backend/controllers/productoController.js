import Producto from "../models/Producto.js";

const registrar = async (req, res) => {
  // const { codigo, nombre, descripcion, precio, estado } = req.body;

  const { codigo } = req.body;

  const existeCodigo = await Producto.findOne({ codigo })
  if (existeCodigo) {
    const error = new Error("Producto ya existe")
    return res.status(400).json({ msg: error.message })
  }

  try {
    const producto = new Producto(req.body);
    const productoGuardado = await producto.save();

    res.json(productoGuardado)
  } catch (error) {
    console.log(error);
  }

}

const listar = async (req, res) => {

  try {
    const producto = await Producto.find()
    res.json({ producto })
  } catch (error) {
    console.log(error)
  }

}

const actualizarProducto = async (req, res) => {

  const { id } = req.params;
  const proid = await Producto.findById(id)

  if (!proid) {
    return res.status(404).json({ msg: "No Encontrado", id })
  }

  if (id.toString() !== proid._id.toString()) {
    return res.json({ msg: "Accion no valida" })
  }

  proid.codigo = req.body.codigo || proid.codigo;
  proid.nombre = req.body.nombre || proid.nombre;
  proid.descripcion = req.body.descripcion || proid.descripcion;
  proid.precio = req.body.precio || proid.precio;
  proid.estado = req.body.estado || proid.estado;

  try {
    const productoActualizado = await proid.save()
    res.json(productoActualizado)
  } catch (error) {
    console.log(error)
  }

}


const eliminar = async (req, res) => {
  const { id } = req.params;
  const proid = await Producto.findById(id)

  if (!proid) {
    return res.status(404).json({ msg: "No Encontrado", id })
  }

  if (id.toString() !== proid._id.toString()) {
    return res.json({ msg: "Accion no valida" })
  }

  try {
    await proid.deleteOne()
    res.json({ msg: "Producto Eliminado" })
  } catch (error) {
    console.log(error)
  }

}


// const postCliente = async (req, res) => {
//   const {
//     id_cliente,
//     nombre_cliente,
//     email_cliente,
//     pass_cliente,
//     direccion_cliente } = req.body;

//   const objCliente = Cliente(
//     {
//       id_cliente,
//       nombre_cliente,
//       email_cliente,
//       pass_cliente,
//       direccion_cliente
//     })

//   objCliente.pass_cliente = bcrypt.hashSync(pass_cliente, 10)

//   await objCliente.save();

//   res.json({
//     msg: 'Cliente POST API',
//     objCliente
//   })
// }




export {
  registrar,
  listar,
  actualizarProducto,
  eliminar,
}