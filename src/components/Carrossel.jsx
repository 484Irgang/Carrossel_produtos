import {TiLocationOutline} from "react-icons/ti"
export default function Carrossel({ap}){
    
    return(
        <div className=" max-w-[240px] lg:mx-6 mx-1 my-1 bg-slate-100 rounded-2xl shadow-xl">
            <img className="w-full rounded-t-2xl aspect-[10/9]" src={ap.img}></img>
                <nav className="w-full p-4 grid">

                    <h3 className="font-semibold text-sm tracking-wide w-full flex justify-between items-center">{ap.title}
                    <span className="w-4 h-4 bg-green-200 rounded-full flex shadow-sm items-center justify-center border border-green-400">
                    <span className="w-2 h-2 bg-green-600 rounded-full inline-block shadow-sm animate-pulse"></span>
                    </span>
                    </h3>

                    <p className="font-light text-xs tracking-wide">{ap.detail}</p>
                    <p className="text-md font-extrabold text-green-500 justify-self-end">{ap.price}</p>
                    <p className="flex items-center text-xs"><TiLocationOutline className="me-1"/>{ap.address}</p>
                </nav>
        </div>
    )
}