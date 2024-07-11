import { Link } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"
import img_Header_1 from "../../assets/img/header/img_1.jpg"

function Header() {

  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
          <div>
            <div>
              <h1 className="text-2xl font-medium tracking-tight pb-16 sm:text-5xl">
                Services and product
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                amet fugiat veniam occaecat fugiat aliqua.
              </p>
            </div>
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