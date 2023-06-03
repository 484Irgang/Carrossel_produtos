export default function Loader(){
    //Aqui o Time Out funciona como se os dados do produto estivessem sido coletados e o loading estivesse pronto para encerrar, então é feito um ultimo efeito que renderiza WELCOME
    setTimeout(() => {
        document.querySelectorAll("div span").forEach((span) => {
            span.classList.add("change");
        })
    }, 2000);
    return (
        <article className="h-[100vh] flex items-center">
            <div className="flex">
                <span className=" w-20 h-20 flex items-center justify-center text-slate-200 font-bold text-xl bg-slate-200 rounded-full mx-4 animate-bounce">W</span>
                <span className=" w-20 h-20 flex items-center justify-center text-slate-200 font-bold text-xl bg-slate-200 rounded-full mx-4 animate-bounce-inverted">E</span>
                <span className=" w-20 h-20 flex items-center justify-center text-slate-200 font-bold text-xl bg-slate-200 rounded-full mx-4 animate-bounce">L</span>
                <span className=" w-20 h-20 flex items-center justify-center text-slate-200 font-bold text-xl bg-slate-200 rounded-full mx-4 animate-bounce-inverted">C</span>
                <span className=" w-20 h-20 flex items-center justify-center text-slate-200 font-bold text-xl bg-slate-200 rounded-full mx-4 animate-bounce">O</span>
                <span className=" w-20 h-20 flex items-center justify-center text-slate-200 font-bold text-xl bg-slate-200 rounded-full mx-4 animate-bounce-inverted">M</span>
                <span className=" w-20 h-20 flex items-center justify-center text-slate-200 font-bold text-xl bg-slate-200 rounded-full mx-4 animate-bounce">E</span>
            </div>
        </article>
    )
}