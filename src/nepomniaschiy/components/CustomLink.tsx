import {Link, useMatch} from "react-router-dom";

type CustomLinkType = {
    children: any
    to: any
}

export const CustomLink = (props: CustomLinkType) => {
    const match = useMatch(props.to)
    const {children, to, ...rest} = props
    return (
        <Link to={to}
                style={{textDecoration: 'none', color: match? '#03eaff': 'black'}} {...rest}>
            {children}
        </Link>
    )
}