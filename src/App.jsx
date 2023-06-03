import Card from "./components/Card"
import {FaAngleDown} from "react-icons/fa";
import DetailApartament from "./components/DetailApartament";
import { useEffect, useState } from "react";
import fetchProducts from "./Produtos";
import Loader from "./components/Loader";

export default function App(){

  //Abaixo são as variáveis de estado, product vai conter os produtos recebidos na resposta do arquivo Products.js,
  // loading é o estado que determina se o efeito de carregar vai continuar ou não,
  // e indexCurrentProduct é o estado que guarda o índice do produto que será demonstrado no componente DetailApartament.jsx
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [indexCurrentProduct, setIndexCurrentProduct] = useState(null);

  //Função chamada ao criar o componente App para buscar os produtos antes da renderização dos componentes,
  // eu coloquei um TimeOut para aparecer o efeito de Loading, como a busca é muito rápida no arquivo Produtos.js não seria possível ver o efeito
  useEffect(() => {
      const newProducts = fetchProducts();
      setProduct(newProducts);
      setTimeout(() => {
        setLoading(false);
      },3500);
  }, []); 

  //Essa função ao ser chamada troca o estado do indexCurrentProduct que era null para o valor do ídice do produto clicado no card e ativa o efeito de blur na pagina principal
  function handleShowDetail(i){
      setIndexCurrentProduct(i+1);
      document.querySelector("#main").classList.add("blur-xl");
  }

  //Esta função troca novamente o valor de indexCurrentProduct para o valor inicial que era null e remove o efeito blur da página
  function handleExitDetails(){
      setIndexCurrentProduct(null);
      document.querySelector("#main").classList.remove("blur-xl");
  }

  return (
    <section className="h-[100%] flex items-center justify-center">
      {
        //Aqui temos uma verificação a cada renderização, se loading for true irá aparecer o efeito de loading ao invés da página de conteudo, se for false aparecerá o conteudo
        loading?
        <Loader/>
        :
        <article className="w-full grid py-4" id="main">
        <h1 className="text-white justify-self-start w-[100%] my-8 sm:my-16 flex items-center tracking-wide"><span className="w-8 h-1 me-8 rounded-e-sm bg-slate-50 inline-block"></span>Oportunidades de Terceiros</h1>
        <div className="w-full px-[4%] sm:p-0 flex flex-wrap items-center justify-center lg:min-h-[360px]">
          {
            //Nessa parte percorrido cada objeto do array products e cada um retorna o componente Card
            product.map((ap, i) => {
              return(
                <Card showDetails={handleShowDetail} key={i} index={i} ap={ap}/>
              )
            })
          }
        </div>
        
        <span className="justify-self-center relative flex justify-center items-center mt-8 sm:mt-20 px-10 py-3 rounded-3xl">
            <a className="text-sm flex z-[2] relative text-white mt-[2px] cursor-pointer justify-center items-center button_see_more">
              VER MAIS
              <FaAngleDown className=" text-lg font-extralight ms-2"/>
            </a>
            <span className="w-[70%] z-[1] bg-[#a90909] h-[3px] absolute bottom-0 rounded-3xl background_button"></span>
        </span>  
        
        </article>
      }
      {
        //Aqui é outra validação a cada renderização, é verificado sa variável tem algum valor, se tiver null não irá renderizar nada,
        // se tiver o valor do índice de algum produto irá renderízar o componente DetailApartament com os dados do produto selecionado
        indexCurrentProduct && <DetailApartament ap={product[indexCurrentProduct-1]} exitDetails={handleExitDetails}/>
      }
    </section>
  )
}
