import React from "react";
import {adidasArr, AdidasItem} from "./pages/Adidas";
import {useParams} from "react-router-dom";
import {pumasArr, PumasItem} from "./pages/Puma";

type CrossModels = {
    [key: string]: AdidasItem[] | PumasItem[]
}

const crossData: CrossModels = {
    adidas: adidasArr,
    puma: pumasArr
}

export const Model = () => {

    const {company, id} = useParams()
    const itemModel = company && crossData[company].find(item => item.id === id)


    return (
        <div style={{
            fontSize: '25px',
            marginLeft: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '75px'
        }}>
            {itemModel
                ? <>
                    <p style={{fontSize: '30px', marginBottom: '10px'}}>{itemModel.model}</p>
                    <p>{itemModel.collection}</p>
                    <img src={`${itemModel.picture}`}
                         alt={`${itemModel.model}`}
                         style={{width: '300px', height: 'auto'}}
                    />
                    <p style={{fontSize: '35px'}}>{itemModel.price}</p>
                </>
                :
                <p style={{fontSize: '35px'}}>This model undefined</p>}
        </div>
    )
}