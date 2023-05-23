import Encabezado from "../../components/Encabezado"
import Lateral from "../../components/Lateral"
import TablaProducto from "../../components/TablaProducto"
import Pie from "../../components/Pie"



const Listar = () => {
  return (
    <>
      <div className="demo">
        <Encabezado></Encabezado>
        <Lateral></Lateral>
        <TablaProducto></TablaProducto>
        <Pie></Pie>

      </div>
    </>



  )
}

export default Listar