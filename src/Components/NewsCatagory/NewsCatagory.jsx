import LogoText from "../LogoText/LogoText";
import { FaChevronRight } from "react-icons/fa";
import './NewsCatagory.scss'
import NewsArticle from "../NewsArticle/NewsArticle";

export default function NewsCatagory ({catagory, headinglevel}) {
    return (
        <>
        <details className="news__details">
            <summary>
                <LogoText level={headinglevel} text={catagory} />
                <FaChevronRight className="dropdown__arrow" />
            </summary>
            <ul>
                <NewsArticle headingLevel={headinglevel} headingText={"Heading Text"} paragraphText={"Hello world!"} />
                <NewsArticle headingLevel={headinglevel} headingText={"Heading Text"} paragraphText={"Hello world!"} />
            </ul>
            
        </details>
        </>
    )
}