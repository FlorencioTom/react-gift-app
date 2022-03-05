import React, { useState } from "react";
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import $ from 'jquery';



function TransitionUp(props) {
    return <Slide {...props} direction="Down" />;
}

export const GiftGridItem = ({id, title, url}) => {
    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState(undefined);
    //console.log(id, title, url);
    const clickAnimation = "animate__flash";
    const animationName = "flash";
    const handleEvent = (e) => {
        if(e.animationName == "zoomOut"){
            $(".card").remove();
        }
        if(e.animationName == animationName){  
            //console.log(e.target);
            $(e.target).removeClass(clickAnimation);
        }
    }

    const handleClose = () => {
        setOpen(false);
    };

    const copyNameGift = (event) =>{
        navigator.clipboard.writeText($(event.target).attr("src"))
            .then(() => {
            $(event.target.parentElement).removeClass("animate__fadeIn");
            $(event.target.parentElement).addClass(clickAnimation);
            //https://v4.mui.com/components/snackbars/
            //hay que meterle un snack bar
            //y hay que meterle paginacion
            //ondas de fondo
            setOpen(true);
            setTransition(() => TransitionUp);

        })
            .catch(err => {
            console.log('Something went wrong', err);
        })
    }

    return (
        <>
            <Tooltip title={title}> 
                <div className="card animate__animated animate__fadeIn animate__faster" onClick={copyNameGift} onAnimationEnd={handleEvent}>
                    <img src={url} alt={title} ></img>
                </div>
            </Tooltip>
            <Snackbar  anchorOrigin={{vertical: 'top', horizontal: 'right'}} 
            autoHideDuration={2000}
            open={open} onClose={handleClose}
            TransitionComponent={transition}
            message="Enlace de gift copiado"
            key={transition ? transition.name : ''}>
                <Alert  variant="filled" severity="success" color="info">Link de {title} en portapapeles</Alert>
            </Snackbar>
        </> 
    )
} 