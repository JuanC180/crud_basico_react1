
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js';
import productoRoutes from './routes/productoRoutes.js'

const PORT = process.env.PORT || 4000;

const app = express()
app.use(express.json())
dotenv.config()
conectarDB()

// app.use('/', (req, res) => {
//   res.send("hols")
// })

const dominiosPermitidos = ["http://localhost:5173"]

const cosrOptions = {
  origin: function (origin, callback) {
    if (dominiosPermitidos.indexOf(origin) !== -1) {
      //origin permitido
      callback(null, true);
    } else {
      callback(new Error('No permitido por Cors'));
    }
  }
}

app.use(cors(cosrOptions))

app.use("/api/productos", productoRoutes);

app.listen(PORT, () => {
  console.log(`Corriendo por el puerto ${PORT}`)
})

