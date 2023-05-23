import mongoose from "mongoose";


const conectarDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser:true,
      useUnifiedTopology:true
    });

    const ruta = `${db.connection.host} : ${db.connection.port}`
    console.log(`MONGODB CONECTADO en ${ruta}`)

  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}


export default conectarDB;