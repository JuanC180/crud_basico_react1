import mongoose from "mongoose";

/*
  codigo
  nombre
  descripcion
  precio
  estado
 
*/

const ProductoSchema = mongoose.Schema({
  codigo: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 7,
    trim: true
  },
  nombre: {
    type: String,
    required: true,
    min: 4,
    max: 20,
    trim: true
  },
  descripcion: {
    type: String,
    required: true,
    min: 10,
    max: 70,
    trim: true
  },
  precio: {
    type: Number,
    required: true,
    trim: true
  },
  estado: {
    type: String,
    required: true,
    trim: true
  },

},
  {
    timestamps: true
  }
);

const Producto = mongoose.model("Item", ProductoSchema);

export default Producto;