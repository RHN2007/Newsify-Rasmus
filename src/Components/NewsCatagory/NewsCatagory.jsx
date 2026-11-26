import LogoText from "../LogoText/LogoText";
import { FaChevronRight } from "react-icons/fa";
import './NewsCatagory.scss'
import NewsArticle from "../NewsArticle/NewsArticle";
import useFetchData from "../../hooks/useFetchData";

export default function NewsCatagory ({apiKey, catagory, headinglevel}) {

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
                (`${isPending ? ("Trying to fetch data, please wait...") : (`FAILED! ${error}`)}`)}
            </ul>
            
        </details>
        </>
    )
}