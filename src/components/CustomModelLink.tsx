import {Link} from "react-router-dom";
import React from "react";
import {AdidasItem} from "./pages/Adidas";

type Props = {
    item: any
}

export const CustomModelLink = (props: Props) => {
        const {item} = props
    return(
        <Link to={`/${item.id}`} key={item.id} >
            <div style={{fontSize: '25px', marginLeft: '10px'}}>
                <img src={`${item.picture}`}
                     alt={`${item.model}`}
                     style={{width: '250px', height: '250px'}}
                />
                <p>{item.model}</p>
                <p>{item.collection}</p>
                <p>{item.price}</p>
            </div>
        </Link>
    )
}