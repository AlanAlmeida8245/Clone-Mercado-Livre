
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import Navbar from "../Components/Navbar/Navbar"
import CardSearch from "../Components/Cards/CardSearch"
import { Link } from "react-router-dom"
import Loading from "../Components/Loading/Loading"


export default function Search(){
    const {nome} = useParams()
    const apiUrl = "https://api.mercadolibre.com/sites/MLB/search?q="
    const [results, setResults] = useState([])

    const getSearchItem = async () => {
        const response = await axios.get(`${apiUrl}${nome}`)
        setResults(response.data.results)
        console.log(response.data.results)
    }

    useEffect(() => {
        getSearchItem()
    }, [nome])

    return(
        <div>
            <Navbar/>
            {results.length > 0 ? (
                <div className="flex p-10  w-full max-lg:block">
                    <div className=" m-5">
                    <h1 className="text-2xl text-black font-bold">{nome}</h1>
                    <p className="">Principais Resultados:</p>
                    </div>
                    <div className="grid grid-cols-3 col-span-2 gap-10 mt-10 max-lg:grid-cols-2">
                    {results.map((product) => (
                        <Link to={product.permalink} target="_blank" key={product.id}>
                        <CardSearch title={product.title} thumbnail={product.thumbnail} price={product.price} />
                        </Link>
                    ))}
                    </div>
                </div>
                ) : <Loading/>}

           
        </div>
    )
}