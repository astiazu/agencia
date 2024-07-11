import Layout from "hocs/layouts/Layout"
import Footer from "components/Navigation/Footer"
import Navbar from "components/Navigation/Navbar"
import Header from "components/home/Header"
import Incentives from "components/home/Incentives"
import UseCases from "components/home/UseCases"
import Features from "components/home/Features"
import CallToAction from "components/home/CallToAction"
import LogoCloud from "components/home/LogoCloud"
import BlogList from "components/home/BlogList"
import { useEffect } from "react"


function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Incentives/>
                <UseCases/>
                <Features/>
                <CallToAction/>
                <LogoCloud/>
                <BlogList/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Home