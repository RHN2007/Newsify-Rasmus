import LogoText from "../LogoText/LogoText";
import './CatagoryItem.scss'

export default function CatagoryItem ({alreadyExists, handleCatagories, catagory, level}) {
    return (
        <>
        <li className="settings__main__list__item">
            <LogoText divClass={"catagory__item__logo"} text={catagory} level={level}/>
            <label className="switch">
                <input checked={alreadyExists} onChange={() => handleCatagories(catagory, event.target.checked)} type="checkbox"></input>
                <span className="slider round"></span>
            </label>
        </li>
        </>
    )
}