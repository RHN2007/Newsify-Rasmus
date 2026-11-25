import LogoText from "../LogoText/LogoText";
import './CatagoryItem.scss'

export default function CatagoryItem ({handleCatagories, catagory, level}) {
    return (
        <>
        <li>
            <LogoText text={catagory} level={level}/>
            <label className="switch">
                <input onChange={() => handleCatagories(catagory, event.target.checked)} type="checkbox"></input>
                <span className="slider round"></span>
            </label>
        </li>
        </>
    )
}