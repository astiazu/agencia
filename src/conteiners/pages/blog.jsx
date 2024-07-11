import Layout from "hocs/layouts/Layout"
import Footer from "components/Navigation/Footer"
import Navbar from "components/Navigation/Navbar"

import img_Header_1 from "../../assets/img/header/img_1.jpg"

import { useEffect } from "react"
import { Helmet } from "react-helmet-async"

function Blog(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
                <title> Estudio 54 - Blogs </title>
                <meta name='description' content='La Institucion que estas buscando para tu carrera universitaria.' ></meta>
                <meta name='keywords' content='Intituto educativo, instituto de educacion, apoyo escolar universitario'></meta>
                <meta name='robot' content='all'></meta>
                <link rel='canonical' href='www.estudio54.com/'></link>
                <meta name='author' content='DatosConsultora.Ar'></meta>
                <meta name='publisher' content='DatosConsultora.Ar'></meta>
                {/* Social Media Tags */}
                <meta property="og:title" content='Estudio 54 | Casos de estudio' />
                <meta property="og:description" content='La Institucion que estas buscando para tu carrera universitaria.' />
                <meta property="og:url" content="https://www.estudio54.com/" />
                <meta property="og:image" content={img_Header_1}/>

                <meta name="twitter:title" content='Estudio 54 | Casos de estudio' />
                <meta
                name="twitter:description"
                content='La Institucion que estas buscando para tu carrera universitaria.'
                />
                <meta name="twitter:image" content={img_Header_1} />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>            
            <Navbar/>
            <div className="pt-28">
                Blog
            </div>
            <Footer/>
        </Layout>
    )
}
export default Blog