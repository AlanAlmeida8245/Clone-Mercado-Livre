
import Logo from "../../assets/mercado-livre-logo-8.png"
import Meli from "../../assets/Meli.webp"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import {BsCart} from "react-icons/bs"
import {MdNotificationsNone} from "react-icons/md"


export default function Navbar(){
    const navigate = useNavigate()

    const [searchItem, setSearchItem] = useState("")
    
    const SearchProduct = () => {
        navigate(`/pesquisa/${searchItem}`)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          SearchProduct();
        }
      };

    return (
       <header className="bg-amarelo  h-26 p-2">
           <nav className="flex flex-col lg:flex-row justify-between items-start h-18 p-3 space-y-3">
            <div className="mb-4 sm:mb-0 max-lg:mx-auto ">
                <Link to="/">
                <img src={Logo} alt="logo ml" className="w-40 ml-10" />
                </Link>
            </div>
            <div className="w-1/2 max-lg:w-full mb-4 sm:mb-0">
                <input
                type="text"
                placeholder="Buscar Produtos, marcas e muito mais"
                className="w-full h-10 rounded-lg p-2"
                onChange={(e) => setSearchItem(e.target.value)}
                onKeyDown={handleKeyPress}
                />
            </div>
            <div className="w-full sm:w-96 max-lg:mx-auto">
                <img src={Meli} alt="Meli+" className="w-full" />
            </div>
            </nav>

            <nav className="flex items-center space-x-5 max-lg:hidden">
                <div className="pl-14">
                    <div className="text-sm">
                        <p>Enviar para Alan</p>
                        <p>Caminho do Horizonte</p>
                    </div>
                </div>
                <div>
                    <ul className="flex space-x-5 text-sm text-gray-600">
                        <li>Categorias</li>
                        <li>Ofertas do Dia</li>
                        <li>Historico</li>
                        <li>Supermercado</li>
                        <li>Moda</li>
                        <li>Vender</li>
                        <li>Contato</li>
                    </ul>
                </div>
                <div className="">
                    <ul className="flex space-x-5 text-sm ml-32">
                        <li>Conta</li>
                        <li>Compras</li>
                        <li>Favoritos</li>
                        <li className="text-lg"><BsCart/></li>
                        <li className="text-lg"><MdNotificationsNone/></li>
                    </ul>
                </div>
            </nav>
       </header>
    )
}