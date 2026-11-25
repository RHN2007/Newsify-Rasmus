import './Header.scss'
import LogoLink from "../LogoLink/LogoLink"

export default function Header() {
    return (
        <>
            <header className="header">
                <LogoLink />
                <form className="header__search">
                    <input type="text" placeholder="Search news" />
                </form>

            </header>
        </>
    )
}