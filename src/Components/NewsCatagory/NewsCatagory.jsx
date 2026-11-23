import LogoText from "../LogoText/LogoText";
import { FaChevronRight } from "react-icons/fa";
import './NewsCatagory.scss'
import NewsArticle from "../NewsArticle/NewsArticle";
import useFetchData from "../../hooks/useFetchData";

export default function NewsCatagory ({catagory, headinglevel}) {

    const apiKey = import.meta.env.VITE_API_KEY
    const {isPending, error, data} = useFetchData(`https://api.nytimes.com/svc/topstories/v2/${catagory}.json?api-key=${apiKey}`) 

    return (
        <>
        <details className="news__details">
            <summary>
                <LogoText divClass={"news__details__heading"} level={headinglevel} text={catagory} />
                <FaChevronRight className="dropdown__arrow" />
            </summary>
            <ul>
                {data ?
                (data.results.map((result) => {
                    return (
                        <NewsArticle articleImage={result.multimedia[0].url} articleLink={result.url} headingLevel={headinglevel} headingText={result.title} paragraphText={result.abstract} />
                    )
                }))
                : 
                ("No data yet, please wait...")}
            </ul>
            
        </details>
        </>
    )
}