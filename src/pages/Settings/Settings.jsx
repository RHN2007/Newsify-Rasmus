import CatagoryItem from "../../Components/CatagoryItem/CatagoryItem";
import LogoLink from "../../Components/LogoLink/LogoLink";

export default function Settings({ selectedCatagories, setSelectedCatagories }) {

    function handleCatagories(catagory, state) {
        // console.log(catagory, state)
        const alreadyExists = selectedCatagories.includes(catagory)
        console.log(alreadyExists)

        if (state === true && alreadyExists === false) {
            setSelectedCatagories([...selectedCatagories, catagory])
            return
        }

        const newArray = selectedCatagories.filter((index) => index !== catagory)
        console.log(newArray)
        setSelectedCatagories(newArray)
    }

    const catagories = [
        "automobiles",
        "books/review",
        "business",
        "fashion",
        "food",
        "health",
        "home",
        "insider",
        "magazine",
        "movies",
        "nyregion",
        "obituaries",
        "opinion",
        "politics",
        "realestate",
        "science",
        "sports",
        "sundayreview",
        "technology",
        "theater",
        "t-magazine",
        "travel",
        "upshot",
        "us",
        "world"
    ]

    return (
        <>
            <header>
                <LogoLink />
                <h2>Settings</h2>
                <p>Categories</p>
            </header>
            <main>
                <ul>
                    {catagories.map((catagory) => {
                        return (
                            <CatagoryItem handleCatagories={handleCatagories} catagory={catagory} level={3} />
                        )
                    })}
                </ul>
            </main>
        </>
    )
}