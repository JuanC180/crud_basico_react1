
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import Formulario from './paginas/Formulario'
import Listar from './paginas/Listar'








function App() {

  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route index element={<Listar />} />
            <Route path='formulario' element={<Formulario />} />
            {/* <Route path='formulario/:id' element={<Formulario />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
