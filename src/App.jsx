import Carrossel from "./components/Carrossel"
import apartament from "./assets/apartamento.jpg"
import {FaAngleDown} from "react-icons/fa";

export default function App(){
  const product = [{img: apartament, title: "Noemia machado residence", detail: "Apartamento 602", price: "R$ 450.000,00", address: "Morretes, Itapema - SC"},
  {img: apartament, title: "Noemia machado residence", detail: "Apartamento 602", price: "R$ 450.000,00", address: "Morretes, Itapema - SC"},
  {img: apartament, title: "Noemia machado residence", detail: "Apartamento 602", price: "R$ 450.000,00", address: "Morretes, Itapema - SC"},
  {img: apartament, title: "Noemia machado residence", detail: "Apartamento 602", price: "R$ 450.000,00", address: "Morretes, Itapema - SC"}];

  return (
    <section className="h-[100%] flex items-center justify-center">
      <article className="w-full grid">
        <h1 className="text-white justify-self-start w-[100%] my-8 sm:my-16 flex items-center tracking-wide"><span className="w-8 h-1 me-8 rounded-e-sm bg-slate-50 inline-block"></span>Oportunidades de Terceiros</h1>
        <div className="w-full px-[4%] sm:p-0 flex flex-wrap items-center justify-center">
          {
            product.map((ap) => {
              return(
                <Carrossel ap={ap}/>
              )
            })
          }
        </div>

        <span className="justify-self-center relative flex justify-center items-center sm:mt-20 px-10 py-3 rounded-3xl">
            <a className="text-sm flex z-[2] relative text-white mt-[2px] cursor-pointer justify-center items-center button_see_more">
              VER MAIS
              <FaAngleDown className=" text-lg font-extralight ms-2"/>
            </a>
            <span className="w-[70%] z-[1] bg-red-800 h-[3px] absolute bottom-0 rounded-3xl background_button"></span>
        </span>  
        
      </article>
    </section>
  )
}
