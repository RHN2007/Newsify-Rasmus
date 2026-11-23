import { Link } from "react-router"
import './Header.scss'
import LogoText from "../LogoText/LogoText"

export default function Header() {
    return (
        <>
            <header className="header">
                <Link to="/">
                    <LogoText level={"1"} text={"Newsify"} divClass={"header__logotext"} />
                </Link>
                <form className="header__search">
                    <input type="text" placeholder="Search news" />
                </form>

            </header>
        </>
    )
}