import {Link, useMatch} from "react-router-dom";

type CustomLinkType = {
    children: any
    to: any
}

export const CustomLink = (props: CustomLinkType) => {

    const {children, to, ...rest} = props
    const match = useMatch({
        path: to,
        end: to.length === 1
    })
    return (
        <Link to={to}
                style={{textDecoration: 'none', color: match? '#03eaff': 'black'}} {...rest}>
            {children}
        </Link>
    )
}