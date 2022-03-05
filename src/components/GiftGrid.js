import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftGridItem } from "./GifGridItem";
import CircularProgress from '@material-ui/core/CircularProgress';


//import { getGifs } from "../helpers/getGifs";


export const GiftGrid = ({category}) => {
    //getGifts se ejecutará solo cuando el componente sea renderizado por primera vez y cuando cambie la categoria
    /*const [images, setImages] = useState([]);*/
    

    const {data:images, loading} = useFetchGifs(category);
    //renombramos data a images


    return (
        <>      
            { loading ? <CircularProgress />  : null} 
            <div className="card-grid animate__animated animate__fadeIn">
                {images.map( img => (
                    <GiftGridItem key={img.id} {...img} />  
                ))}
            </div>
        </>
    )
} 