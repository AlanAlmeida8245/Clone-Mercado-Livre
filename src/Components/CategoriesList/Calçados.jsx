import axios from "axios";
import { useEffect, useState } from "react";
import CardItem from "../Cards/CardItem";
import Loading from "../Loading/Loading";

export default function Calçados() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get(
      "https://api.mercadolibre.com/sites/MLB/search?category=MLB1430"
    );
    const itens = response.data.results.slice(0, 4); // Pega os 4 primeiros itens
    setProducts(itens);
    console.log(response.data.results)                                                                                                      
  };

  return (

    <div>
       <h1 className="text-2xl ml-20 p-1 mt-12">Confira nossos Calçados <span className="ml-5 text-sm text-blue-500 font-bold">Ver Histórico</span></h1>
      <div className="grid grid-cols-4 w-max mx-auto gap-10 mt-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {products.length > 0 ? (
        <>
          {products.map((item, index) => (
            <CardItem key={index} price={item.price} thumbnail={item.thumbnail} title={item.title} />
          ))}
        </>
      ) : (
        <Loading />
      )}
      </div>
    </div>
  );
}
