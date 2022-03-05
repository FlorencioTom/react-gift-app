import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';
import Divider from '@mui/material/Divider';


export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['himym']);
    //categorias es la variable, cada vez que usamos setCategorias estaremos cambiandpo el valor de cateogorias
    return (
        <div>   
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <br/>
            <ul>
                {   
                    //category representa cada elemento de categorias
                    //por cada elemento que hay en categorias haremos una funcion.
                    categorias.map((category) => {
                        return <GiftGrid key={category} category={category}></GiftGrid>
                    })
                } 
            </ul>
        </div>
    )
}