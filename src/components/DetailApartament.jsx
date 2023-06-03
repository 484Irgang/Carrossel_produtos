import {TiLocationOutline} from "react-icons/ti"
import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa"
import { useState } from "react"

export default function DetailApartament({ap,exitDetails}){
    //Variável de estado que contém o índice atual da imagem que está sendo mostrada, inicia com o índice 0
    const [currentIndex, setCurrentIndex] = useState(0);

    //Função que é acionada para rolar a imagem até a ultima disponível, verifica se está na ultima imagem antes de rolar
    function scrollToRigth(){
        if(currentIndex < ap.img.length-1)
        {
            const img = document.querySelectorAll("#images")[currentIndex];
            document.querySelector("#carrossel").parentElement.scrollLeft += img.width;
            return setCurrentIndex((curr) => curr+1);
        }
            return false;
    }

    //Função que rola a imagem do produto até a primeira, e verifica se já chegou na primeira antes de rolar
    function scrollLeft(){
        if(currentIndex > 0)
        {
            const img = document.querySelectorAll("#images")[currentIndex];
            document.querySelector("#carrossel").parentElement.scrollLeft -= img.width;
            return setCurrentIndex((curr) => curr-1);
        }
            return false;
    }

    return(
        <section className="absolute z-10 flex w-full h-full justify-center items-center">
            <article className=" max-w-[520px] bg-white rounded-2xl relative shadow-xl shadow-stone-800">
                <span onClick={() => exitDetails()} className="absolute w-8 h-8 z-[1] bg-gray-800 hover:bg-red-800 duration-300 rounded-full flex items-center justify-center cursor-pointer right-3 top-3"><FaTimes className="text-md text-white"/></span>
                <div className="w-full bg-red-500 aspect-video rounded-t-2xl relative overflow-hidden scroll-smooth">
                    <nav id="carrossel" style={{width: 100*ap.img.length+"%"}} className="absolute w-[500%] h-full flex">
                        {ap.img.map((img, i) => {
                            return (
                                <img id="images" style={{width: 100/ap.img.length+"%"}} key={i} src={img}/>
                            )
                        })}
                    </nav>
                </div>
                <div className="absolute right-3 top-[45%] z-[1] flex">
                    <span onClick={() => scrollLeft()} className="w-8 h-8 bg-gray-800 rounded-full hover:bg-green-800 duration-300 flex items-center cursor-pointer me-1"><FaAngleLeft className="text-xl ms-[5px] text-white"/></span>
                    <span onClick={() => scrollToRigth()} className="w-8 h-8 bg-gray-800 rounded-full hover:bg-green-800 duration-300 flex items-center cursor-pointer ms-1"><FaAngleRight className="text-xl ms-[6px] text-white"/></span>
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