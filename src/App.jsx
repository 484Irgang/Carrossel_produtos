import Carrossel from "./components/Carrossel"
import apartament from "./assets/apartamento.jpg"
import {FaAngleDown} from "react-icons/fa";
import DetailApartament from "./components/DetailApartament";
import { useState } from "react";

export default function App(){
  const product = [{img: apartament, title: "Noemia machado residence", complement: "Apartamento 602", price: "R$ 450.000,00", address: "Morretes, Itapema - SC", details: ["3 dormitórios, sendo 1 suite", "Sala de estar", "Cozinha", "Banheiro social", "Área de serviço","Sacada com churrasqueira", "1 vaga de garagem", "Área privativa 69,00m²"]},
  {img: apartament, title: "Noemia machado residence", complement: "Apartamento 602", price: "R$ 450.000,00", address: "Morretes, Itapema - SC", details: ["3 dormitórios, sendo 1 suite", "Sala de estar", "Cozinha", "Banheiro social", "Área de serviço","Sacada com churrasqueira", "1 vaga de garagem", "Área privativa 69,00m²"]},
  {img: apartament, title: "Noemia machado residence", complement: "Apartamento 602", price: "R$ 450.000,00", address: "Morretes, Itapema - SC", details: ["3 dormitórios, sendo 1 suite", "Sala de estar", "Cozinha", "Banheiro social", "Área de serviço","Sacada com churrasqueira", "1 vaga de garagem", "Área privativa 69,00m²"]},
  {img: apartament, title: "Noemia machado residence", complement: "Apartamento 602", price: "R$ 450.000,00", address: "Morretes, Itapema - SC", details: ["3 dormitórios, sendo 1 suite", "Sala de estar", "Cozinha", "Banheiro social", "Área de serviço","Sacada com churrasqueira", "1 vaga de garagem", "Área privativa 69,00m²"]}];
  const [indexCurrentProduct, setIndexCurrentProduct] = useState(null);

  function handleShowDetail(i){
      setIndexCurrentProduct(i+1);
      const main = document.querySelector("#main");
      main.classList.add("blur-xl")
  }

  return (
    <section className="h-[100%] flex items-center justify-center">
      <article className="w-full grid py-4" id="main">
        <h1 className="text-white justify-self-start w-[100%] my-8 sm:my-16 flex items-center tracking-wide"><span className="w-8 h-1 me-8 rounded-e-sm bg-slate-50 inline-block"></span>Oportunidades de Terceiros</h1>
        <div className="w-full px-[4%] sm:p-0 flex flex-wrap items-center justify-center lg:min-h-[360px]">
          {
            product.map((ap, i) => {
              return(
                <Carrossel showDetails={handleShowDetail} key={i} index={i} ap={ap}/>
              )
            })
          }
        </div>

        <span className="justify-self-center relative flex justify-center items-center mt-8 sm:mt-20 px-10 py-3 rounded-3xl">
            <a className="text-sm flex z-[2] relative text-white mt-[2px] cursor-pointer justify-center items-center button_see_more">
              VER MAIS
              <FaAngleDown className=" text-lg font-extralight ms-2"/>
            </a>
            <span className="w-[70%] z-[1] bg-red-800 h-[3px] absolute bottom-0 rounded-3xl background_button"></span>
        </span>  
        
      </article>
      {
        indexCurrentProduct && <DetailApartament ap={product[indexCurrentProduct-1]}/>
      }
    </section>
  )
}
