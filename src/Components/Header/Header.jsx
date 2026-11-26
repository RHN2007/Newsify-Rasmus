import './Header.scss'
import LogoLink from "../LogoLink/LogoLink"
import Search from '../Search/Search'

export default function Header({handleSearch}) {
    return (
        <>
            <header className="header">
                <LogoLink />
                <Search handleSearch={handleSearch} />
            </header>
        </>
    )
}