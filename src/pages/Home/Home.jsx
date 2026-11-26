import { useEffect, useState } from "react";
import './Home.scss'
import Header from "../../Components/Header/Header";
import NewsCatagory from "../../Components/NewsCatagory/NewsCatagory";
import useFetchData from "../../hooks/useFetchData";
import NewsArticle from "../../Components/NewsArticle/NewsArticle";

export default function Home({ selectedCatagories }) {

    const apiKey = import.meta.env.VITE_API_KEY
    const [searchURL, setSearchURL] = useState("")



    const { isPending, error, data } = useFetchData(searchURL)

    function handleSearch(event) {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        const search = formData.get("search")

        setSearchURL(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${apiKey}`)

    }

    return (
        <>
            <Header handleSearch={handleSearch} />
            <main className="main">
                {data ?
                (
                    data.response.docs.map((result) => {
                    return (
                        <NewsArticle articleImage={result.multimedia.default.url} articleLink={result.web_url} headingLevel={2} headingText={result.headline.main} paragraphText={result.abstract} />
                    )
                }))
                :
                selectedCatagories.map((catagory, index) => {
                    return (
                        <NewsCatagory apiKey={apiKey} headinglevel={index + 2} catagory={catagory} />
                    )
                })
                }
                {/* {selectedCatagories.map((catagory, index) => {
                    return (
                        <NewsCatagory apiKey={apiKey} headinglevel={index + 2} catagory={catagory} />
                    )
                })} */}
            </main>
        </>
    )
}