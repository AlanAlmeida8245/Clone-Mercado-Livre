

export default function CardSearch({id, title, thumbnail, price}){
    return(
        <div className="bg-white rounded-lg">
            <div className="flex justify-center">
                <img src={thumbnail} alt="sla" width="200px" height="200px"
                />
            </div>
            <hr />
            <div className="p-2 space-y-1">
                <h1 className="text-sm">{title}</h1>
                <p className="text-2xl">R$ {price}</p>
                <p className="text-green-500 text-sm">12x R$10,00</p>
                <p className="text-green-500 font-bold text-sm">Frete Grátis</p>
                <p className="mt-1">klakakekeke</p>
            </div>
        </div>
    )
}