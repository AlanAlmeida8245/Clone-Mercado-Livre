
import Carroussel from "../Components/Carroussel/Carroussel"
import CardItem from "../Components/Cards/CardItem"
import Navbar from "../Components/Navbar/Navbar"
import Calçados from "../Components/CategoriesList/Calçados"
import Celulares from "../Components/CategoriesList/Celulares"
import Eletromesticos from "../Components/CategoriesList/Eletrodomesticos"
import Games from "../Components/CategoriesList/Games"

export default function Home(){
    
 
    return(
        <div>
            <Navbar />
            <Carroussel />

            <div className="flex flex-wrap justify-center text-md">
                <div className="bg-white w-72 sm:w-96 mt-5 md:mt-10 p-3 h-20 pl-8">
                    <p>Pagamento Rápido e Seguro</p>   
                    <p className="text-gray-600">Com Mercado Pago</p>
                </div>
                <div className="bg-white w-72 sm:w-96 flex justify-evenly mt-5 md:mt-10 p-3 h-20">
                    <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg" alt="" />
                    <div>
                        <p>Até 10x sem Juros</p>
                        <p className="text-blue-600">Ver Mais</p>
                    </div>
                </div>
                <div className="bg-white w-72 sm:w-96 flex justify-evenly mt-5 md:mt-10 p-3 h-20">
                    <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg" alt="" />
                    <div>
                        <p>Parcelamento sem Cartão</p>
                        <p className="text-blue-600">Conheça o Mercado Crédito</p>
                    </div>
                </div>
                <div className="bg-white w-72 sm:w-96 flex justify-evenly mt-5 md:mt-10 p-3 h-20">
                    <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/qr.svg" alt="" />
                    <div>
                        <p>Via Pix</p>
                        <p className="text-blue-600">Ver Mais</p>
                    </div>
                </div>
            </div>


            
            <Celulares/>
            <Games />
            <Eletromesticos />
            <Calçados/>

        </div>
    )
}