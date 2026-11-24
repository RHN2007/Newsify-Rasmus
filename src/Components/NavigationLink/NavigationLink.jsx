import { NavLink } from "react-router";

export default function NavigationLink({ Icon, pageName, url }) {
    return (
        <>
            <li className="navigation__item">
                <NavLink to={url}>
                    <Icon />
                    <p>{pageName}</p>
                </NavLink>
            </li>
        </>
    )
}