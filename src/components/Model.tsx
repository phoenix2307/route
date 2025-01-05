import React, {FC} from "react";
import {adidasArr} from "./pages/Adidas";
import {useParams} from "react-router-dom";
import {pumasArr} from "./pages/Puma";

export const Model = () => {
    const params = useParams()
    // const itemModel = adidasArr.find(item => item.id === params.id)
    const itemModel = pumasArr.find(item => item.id === params.id)
    console.log(params)

    return (
        itemModel
            ? <div style={{
                fontSize: '25px',
                marginLeft: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '75px'
            }}>
                <p style={{fontSize: '30px', marginBottom: '10px'}}>{itemModel.model}</p>
                <p>{itemModel.collection}</p>

                <img src={`${itemModel.picture}`}
                     alt={`${itemModel.model}`}
                     style={{width: '300px', height: 'auto'}}
                />
                <p style={{fontSize: '35px'}}>{itemModel.price}</p>
            </div>
            :
            <p style={{fontSize: '35px'}}>This model undefined</p>

    )
}


/*
type Model = AdidasItem

export const Model: FC<Model> = (props) => {
    const { model, collection, price, picture} = props
    return(
        <div >
            <img src={`${picture}`}
                 alt={`${model}`}
                 style={{width: '250px', height: '250px'}}
            />
            <p>{model}</p>
            <p>{collection}</p>
            <p>{price}</p>
        </div>
    )
}*/
