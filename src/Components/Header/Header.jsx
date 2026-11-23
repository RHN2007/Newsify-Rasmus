import { Link } from "react-router"
import './Header.scss'

export default function Header() {
    return (
        <>
            <header className="header">
                <Link to="/" className="header__link">
                    <img src="/assets/newsify_logo.svg" alt="Newsify Logo" className="header__logo" />
                    <h1>Newsify</h1>
                </Link>
                <form className="header__search">
                    <input type="text" placeholder="Search news" />
                </form>

            </header>
        </>
    )
}