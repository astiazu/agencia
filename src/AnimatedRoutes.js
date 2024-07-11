import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Error404 from "conteiners/errors/Error404";
import Home from "conteiners/pages/Home";
import Cases from "conteiners/pages/Cases";
import Services from "conteiners/pages/Services";
import About from "conteiners/pages/About";
import Careers from "conteiners/pages/Careers";
import Contact from "conteiners/pages/Contact";
import Blog from "conteiners/pages/blog"

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {

  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* Error Display*/}
        <Route path="*" element={<Error404 />} />

        {/* Home Display*/}
        <Route path="/" element={<Home />} />
        <Route path="/casos" element={<Cases />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/carreras" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contact />} />


      </Routes>

    </AnimatePresence>
  )
}

export default AnimatedRoutes