
import {Swiper, SwiperSlide} from "swiper/react"

export default function Carroussel(){

    const images = [
    {id: "1", image: "https://http2.mlstatic.com/D_NQ_644485-MLA71926067532_092023-OO.webp"},
    {id: "2", image: "https://http2.mlstatic.com/D_NQ_773608-MLA71953168513_092023-OO.webp"},
    {id: "3", image: "https://http2.mlstatic.com/D_NQ_704149-MLA71826497608_092023-OO.webp"},
    {id: "4", image: "https://http2.mlstatic.com/D_NQ_680303-MLA71982653747_092023-OO.webp  "},

    ]
    
    return(
        <div>
            <Swiper
             slidesPerView={1}
             pagination={{clickable: true}}
             navigation
            >
               {images.map((item) => (
                <SwiperSlide key={item.id}>
                    <img src={item.image} alt="banners" className="max-sm:h-40 image-cover"/>
                </SwiperSlide>
               ))}
            
            </Swiper>
        </div>
    )
}