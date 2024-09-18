import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/home/home'
import Cursos from '../pages/cursos/cursos'
import Usuarios from '../pages/usuarios/usuarios'
import MasInformacion from '../pages/masinformacion/masInformacion'
import Login from '../pages/login/login'

const NavbarRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<home />} />
      <Route path="/home" element={<home />} />
      <Route path="/cursos" element={<cursos />} />
      <Route path="/usuarios" element={<usuarios />} />
      <Route path="/masinformacion" element={<masInformacion />} />
      <Route path="/login" element={<login />} />
    </Routes>
  )
}

export default NavbarRoutes;