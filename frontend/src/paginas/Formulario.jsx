import React from 'react'
import Encabezado from '../../components/Encabezado'
import Lateral from '../../components/Lateral'
import Pie from '../../components/Pie'
import Principal from '../../components/Principal'
import TablaProducto from '../../components/TablaProducto'



const Formulario = () => {
  return (
    <>
      <div className="demo">


        <Encabezado></Encabezado>
        <Lateral></Lateral>
        <Principal></Principal>
        <Pie></Pie>
      </div>
    </>
  )
}

export default Formulario