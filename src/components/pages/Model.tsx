import React from "react";
import {adidasArr, AdidasItem} from "./Adidas";
import {useParams} from "react-router-dom";
import {pumasArr, PumasItem} from "./Puma";

type CrossModels = {
    [key: string]: AdidasItem[] | PumasItem[]
}

const crossData: CrossModels = {
    adidas: adidasArr,
    puma: pumasArr
}

export const Model = () => {

    const {company, id} = useParams()
    const currentModel = company ? crossData[company].find(item => item.id === id) : null


    return (
        <div style={{
            fontSize: '25px',
            marginLeft: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '75px'
        }}>
            {currentModel
                ? <>
                    <p style={{fontSize: '30px', marginBottom: '10px'}}>{currentModel.model}</p>
                    <p>{currentModel.collection}</p>
                    <img src={`${currentModel.picture}`}
                         alt={`${currentModel.model}`}
                         style={{width: '300px', height: 'auto'}}
                    />
                    <p style={{fontSize: '35px'}}>{currentModel.price}</p>
                </>
                :
                <p style={{fontSize: '35px'}}>This model undefined</p>}
        </div>
    )
}