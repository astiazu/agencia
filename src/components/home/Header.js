import { Link } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"
import img_Header_1 from "../../assets/img/header/img_1.jpg"

function Header(){

    return(
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto lg:mx-12 max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-2xl font-medium tracking-tight pb-16 sm:text-5xl">
                  Courses and support to <span> </span>
                  <span  className="inline-flex" style = {{color : 'green' ,  fontWeight : 'medium'}} >       
                        <Typewriter 
                          words = { ['Arquitectura ! ' ,  'Matemáticas ! ' ,  'Estadísticas ! ' ,  'Ciencia de Datos ! ' ] }
                          loop={ 0 }
                          cursor
                          cursorStyle=' '
                          typeSpeed={100}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          //onLoopDone={handleDone}
                          //onType={handleType}
                        />
                  </span>
                </h1>
                <ul className="flex gap-6"> 
                    {/* "flex gap-8 items-center justify-center py-12"> puedo cambiar el css */} 
                    <li className="inline-flex transition duration-100 ease-in-out border-b-2 border-transparent hover:border-green-button">
                        <Link to='/servicios/arquitectura' className = 'mt-6 text-1xl font-medium leading-8 text-gray-600 sm:text-center'>
                            Arquitectura
                        </Link>
                    </li>
                    <li className="inline-flex transition duration-100 ease-in-out border-b-2 border-transparent hover:border-green-button">
                        <Link to='/servicios/arquitectura' className = 'mt-6 text-1xl font-medium leading-8 text-gray-600 sm:text-center'>
                            Matemáticas
                        </Link>
                    </li>
                    <li className="inline-flex transition duration-100 ease-in-out border-b-2 border-transparent hover:border-green-button">
                        <Link to='/servicios/arquitectura' className = 'mt-6 text-1xl font-medium leading-8 text-gray-600 sm:text-center'>
                            Estadísticas
                        </Link>
                    </li>
                    <li className="inline-flex transition duration-100 ease-in-out border-b-2 border-transparent hover:border-green-button">
                        <Link to='/servicios/arquitectura' className = 'mt-6 text-1xl font-medium leading-8 text-gray-600 sm:text-center'>
                            Datos 1
                        </Link>
                    </li>
                    <li className="inline-flex transition duration-100 ease-in-out border-b-2 border-transparent hover:border-green-button">
                        <Link to='/servicios/arquitectura' className = 'mt-6 text-1xl font-medium leading-8 text-gray-600 sm:text-center'>
                            Datos 2
                        </Link>
                    </li>
                </ul>

              </div>
              {/* <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
                <img src="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg" className='w-full h-full object-cover'/>
              </div> */}
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white lg:top-[calc(100%-40rem) sm:top-[calc(100%-40rem)]">
                <img src={img_Header_1} className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Header