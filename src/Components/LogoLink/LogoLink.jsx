import { Link } from "react-router";
import LogoText from "../LogoText/LogoText";

export default function LogoLink() {
    return (
        <>
            <Link to="/">
                <LogoText level={"1"} text={"Newsify"} divClass={"header__logotext"} />
            </Link>
        </>
    )
}