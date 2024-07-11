import Layout from "hocs/layouts/Layout"
import Footer from "components/Navigation/Footer"
import Navbar from "components/Navigation/Navbar"
import Header from "components/services/Header"
import ServicesList from "components/services/ServicesList"
import img1 from 'assets/img/services/analysis.png'
import img2 from 'assets/img/services/cost-effectiveness.png'
import img3 from 'assets/img/services/money.png'
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import img_Header_1 from "../../assets/img/header/img_1.jpg"

const posts_software = [
    {
        id: '1234-qwer',
        title: 'Boost your conversion rate',
        img: img1,
        href: '#',
        category: { name: 'Article', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '6 min',
        author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: '5678-asdf',
        title: 'How to use search engine optimization to drive sales',
        img: img2,
        href: '#',
        category: { name: 'Video', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '4 min',
        author: {
            name: 'Brenna Goyette',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: '9876-zxcv',
        title: 'Improve your customer experience',
        img: img3,
        href: '#',
        category: { name: 'Case Study', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '11 min',
        author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

const posts_design = [
    {
        id: '1212-qwer',
        title: 'Boost your conversion rate',
        img: img1,
        href: '#',
        category: { name: 'Article', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '6 min',
        author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: '5656-asdf',
        title: 'How to use search engine optimization to drive sales',
        img: img2,
        href: '#',
        category: { name: 'Video', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '4 min',
        author: {
            name: 'Brenna Goyette',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: '9898-zxcv',
        title: 'Improve your customer experience',
        img: img3,
        href: '#',
        category: { name: 'Case Study', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '11 min',
        author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

function Services(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
           <Helmet>
                <title> Estudio 54 - Servicios </title>
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
                <Header/>
                <div className="py-12 bg-gray-800">

                </div>
                <ServicesList posts={posts_software} section_title={'Software and Product developer'}/>
                <ServicesList posts={posts_design} section_title={'Design Services'}/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Services 