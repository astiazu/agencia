import img1 from "./img/img_about_1.png"
import img2 from "./img/img_about_2.png"

function Images(){
    return(
        <>
        <div className="w-full" >
            <div className="grid grid-cols-2 gap-8">
            <img src={img1} className="w-full h96 object-cover"/>
            <img src={img2} className="w-full h96 object-cover"/>
            </div>
        </div>
        </>
    )
}

export default Images