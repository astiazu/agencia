import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import store from './store'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';


import AnimatesRoutes from "AnimatedRoutes";


function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title> Estudio 54 - Instituto </title>
        <meta name='description' content='La Institucion que estas buscando para tu carrera universitaria.' ></meta>
        <meta name='keywords' content='Intituto educativo, instituto de educacion, apoyo escolar universitario'></meta>
        <meta name='robot' content='all'></meta>
        <link rel='canonical' href='www.estudio54.com/'></link>
        <meta name='author' content='DatosConsultora.Ar'></meta>
        <meta name='publisher' content='DatosConsultora.Ar'></meta>
        {/* Social Media Tags */}
        <meta property="og:title" content='Estudio 54 | Instituto' />
        <meta property="og:description" content='La Institucion que estas buscando para tu carrera universitaria.' />
        <meta property="og:url" content="https://www.estudio54.com/" />
        <meta property="og:image" content='/src/assets/img/header/icon-estudio.png'/>

        <meta name="twitter:title" content='Estudio 54 | Instituto' />
        <meta
          name="twitter:description"
          content='La Institucion que estas buscando para tu carrera universitaria.'
        />
        <meta name="twitter:image" content='/src/assets/img/header/icon-estudio.png' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Provider store={store}>
        <Router>
          <AnimatesRoutes/>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
