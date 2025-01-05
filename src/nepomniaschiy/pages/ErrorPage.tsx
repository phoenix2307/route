import {useRouteError} from "react-router-dom";

export const  ErrorPage = () => {
    const error: any = useRouteError()
    // це тільки один з варіантів. Для обробки помилок спочатку продивитися документацію
    // та вибрати варінт, який підходить під конкретну задачу

    return(
        <div>
            <h1>For testing ErrorPage</h1>
            <h2>{` error.status: ${error.status}`}</h2>
            <h3>{` error.statusText: ${error.statusText}` || `Something goes wrong!`}</h3>
        </div>
    )
}