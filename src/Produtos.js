import apartament from "./assets/apartamento.jpg"
import apartament2 from "./assets/apartamento2.jpg"
import apartament3 from "./assets/apartamento3.jpg"
import apartament4 from "./assets/apartamento4.jpg"

// Aqui é de onde é buscado os produtos solicitados na interface, como se fosse por exemplo uma função assíncrona que busca dados do servidor ou alguma API 
export default function fetchProducts(){
    return [
    {img: [apartament,apartament2,apartament3,apartament4], title: "Noemia machado residence", complement: "Apartamento 602", price: "R$ 450.000,00", address: "Morretes, Itapema - SC", details: ["3 dormitórios, sendo 1 suite", "Sala de estar", "Cozinha", "Banheiro social", "Área de serviço","Sacada com churrasqueira", "1 vaga de garagem", "Área privativa 69,00m²"]},
    {img: [apartament2,apartament3,apartament4,apartament], title: "Noemia machado residence", complement: "Apartamento 602", price: "R$ 450.000,00", address: "Morretes, Itapema - SC", details: ["3 dormitórios, sendo 1 suite", "Sala de estar", "Cozinha", "Banheiro social", "Área de serviço","Sacada com churrasqueira", "1 vaga de garagem", "Área privativa 69,00m²"]},
    {img: [apartament3,apartament4,apartament,apartament2], title: "Noemia machado residence", complement: "Apartamento 602", price: "R$ 450.000,00", address: "Morretes, Itapema - SC", details: ["3 dormitórios, sendo 1 suite", "Sala de estar", "Cozinha", "Banheiro social", "Área de serviço","Sacada com churrasqueira", "1 vaga de garagem", "Área privativa 69,00m²"]},
    {img: [apartament4,apartament,apartament2,apartament3], title: "Noemia machado residence", complement: "Apartamento 602", price: "R$ 450.000,00", address: "Morretes, Itapema - SC", details: ["3 dormitórios, sendo 1 suite", "Sala de estar", "Cozinha", "Banheiro social", "Área de serviço","Sacada com churrasqueira", "1 vaga de garagem", "Área privativa 69,00m²"]}
    ]
};