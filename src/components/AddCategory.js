import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import $ from 'jquery';



export const AddCategory = ({setCategorias}) => {
    //https://v4.mui.com/api/input/
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //event.preventDefult(Cancela el evento si es cancelable)
        //En este caso evitamos que se complete el submit para que se vuelva a recagra la página
        e.preventDefault();
        //console.log('Submit echo');
        if(inputValue.trim().length > 2){
            setCategorias(categorias => [inputValue, ...categorias]);
            setInputValue('');
        }
    }

    const cleanGift = (e) => {
        //alert("hola");
        $(".card").removeClass("animate__fadeIn");
        $(".card").addClass("animate__zoomOut");
        //$(".card").remove();
    }

    /*$("body").on("webkitAnimationEnd", ".card", function(e){
        if(e.originalEvent.animationName == "animate__zoomOut"){
            $(".card").remove();
            console.log(e);
        }
    });*/
    
    return (
        <form onSubmit={handleSubmit}>
            <Input placeholder="Gift" type="text" value={inputValue} onChange={handleInputChange}/>
            <Button id="search" variant="contained" color="secondary" onClick={cleanGift}>  Delete </Button>
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}