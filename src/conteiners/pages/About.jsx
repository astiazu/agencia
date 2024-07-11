import Layout from "hocs/layouts/Layout"
import Footer from "components/Navigation/Footer"
import Navbar from "components/Navigation/Navbar"
import Header from "components/about/header"
import TestStats from "components/about/TestStats"
import Images from "components/about/images"
import Clients from "components/about/Clients"
import Features from "components/about/Features"
import Team from "components/about/Team"
import Cta from "components/about/Cta"

import img_Header_1 from "../../assets/img/header/img_1.jpg"

import { Helmet } from "react-helmet-async"
import { useEffect } from "react"


function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
            <Helmet>
                <title> Estudio 54 - Nosotros </title>
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
            <Navbar />
            <div className="pt-28">
                <Header />
                <TestStats />

                {/* Images Section */}
                <Images />
                {/* Images Section */}

                {/* Clients Section */}
                <Clients />
                <div className="bg-white">
                    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                    alt="Transistor"
                                />
                            </div>
                            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                    alt="Workcation"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Features />
                <Team />
                <Cta/>
            </div>
            <Footer />
        </Layout>
    )
}

export default About