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
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/masinformacion" element={<MasInformacion />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default NavbarRoutes;