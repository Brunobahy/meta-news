import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import PaginaBase from "./Pages/PaginaBase";
import Login from "./Pages/Login";
import './global.css'
import { RecoilRoot } from "recoil";
import Home from "Pages/Home";
import { useEffect } from "react";
import Perfil from "Pages/Perfil";
import { AnimatePresence } from "framer-motion";


function AppRoutes() {
  let location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {

    const user = localStorage.getItem('login');

    if (!user) {
      return navigate('/login')
    }

  }, [])

  return (
    <RecoilRoot>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PaginaBase />}>
            <Route index element={<Home />} />
            <Route path="/Perfil" element={<Perfil />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </RecoilRoot>
  );
}

export default AppRoutes;
