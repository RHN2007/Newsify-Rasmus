import { FaHouse } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { BsGear } from "react-icons/bs";
import './NavigationBar.scss'
import NavigationLink from "../NavigationLink/NavigationLink";

export default function NavigationBar () {
    const navbarOptions = [
    {
        "pageName": "Home",
        "url": "/",
        "icon": FaHouse
    },
    {
        "pageName": "Archive",
        "url": "/Saves",
        "icon": CiBookmark
    },
    {
        "pageName": "Popular",
        "url": "/Popular",
        "icon": FaRegStar
    },
    {
        "pageName": "Settings",
        "url": "/Settings",
        "icon": BsGear
    }
    ]


    return (
        <>
            <nav className="navigation">
                <ul className="navigation__list">
                    {navbarOptions.map((option) => {
                        return (
                            <NavigationLink Icon={option.icon} pageName={option.pageName} url={option.url} />
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}