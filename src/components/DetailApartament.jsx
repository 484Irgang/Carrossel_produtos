import {TiLocationOutline} from "react-icons/ti"
import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa"

export default function DetailApartament({ap}){
    return(
        <section className="absolute z-10 flex w-full h-full justify-center items-center">
            <article className=" max-w-[520px] bg-white rounded-2xl relative shadow-xl shadow-stone-800">
                <span className="absolute w-8 h-8 bg-gray-800 hover:bg-red-800 duration-300 rounded-full flex items-center justify-center cursor-pointer right-3 top-3"><FaTimes className="text-md text-white"/></span>
                <img className="rounded-t-2xl" src={ap.img}></img>
                <div className="absolute right-3 top-[48%] flex">
                    <span className="w-8 h-8 bg-gray-800 rounded-full hover:bg-green-800 duration-300 flex items-center cursor-pointer me-1"><FaAngleLeft className="text-xl ms-[5px] text-white"/></span>
                    <span className="w-8 h-8 bg-gray-800 rounded-full hover:bg-green-800 duration-300 flex items-center cursor-pointer ms-1"><FaAngleRight className="text-xl ms-[6px] text-white"/></span>
                </div>
                <nav className="p-[6%]">
                    <h3 className="text-lg font-bold w-full flex items-center justify-between">{ap.title}<span className="text-green-500">{ap.price}</span></h3>
                    <p className="flex items-center text-sm"><TiLocationOutline className="me-1"/>{ap.address}</p>
                    <h2 className="mt-4 font-bold">APARTAMENTO</h2>
                    <ul className="flex flex-wrap mt-8">
                        {
                            ap.details.map((detail, i) => {
                                return <li key={i} className="w-[50%] list-disc list-inside text-sm">{detail}</li>
                            })
                        }
                    </ul>
                </nav>
            </article>
        </section>    
    )
}