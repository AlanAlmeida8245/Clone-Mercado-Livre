



export default function CardItem({title, thumbnail, price}){
    return(
        <div className="bg-white w-60 rounded-lg">
            <div className="flex justify-center">
                <img src={thumbnail} alt="sla" width="200px"
                />
            </div>
            <hr />
            <div className="p-2 space-y-1">
                <h1 className="text-2xl ">R$ {price}</h1>
                <p>{title}</p>
                <p className="text-gray-400 text-sm">12x R$10,00</p>
                <p className="text-green-500 font-bold text-sm">Frete Grátis</p>
                <p className="mt-1">klakakekeke</p>
            </div>
        </div>
    )
}
