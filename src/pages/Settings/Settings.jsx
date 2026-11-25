import CatagoryItem from "../../Components/CatagoryItem/CatagoryItem";
import LogoLink from "../../Components/LogoLink/LogoLink";
import './Settings.scss'

export default function Settings({ handleDarkmode, selectedCatagories, setSelectedCatagories }) {

    function handleCatagories(catagory, state) {
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
            <header className="settings__header">
                <LogoLink />
                <h2>Settings</h2>
                <p>Categories</p>
            </header>
            <main className="settings__main">
                <ul className="settings__main__list">
                    {catagories.map((catagory) => {
                        const alreadyExists = selectedCatagories.includes(catagory)
                        return (
                            <CatagoryItem alreadyExists={alreadyExists} handleCatagories={handleCatagories} catagory={catagory} level={3} />
                        )
                    })}
                </ul>
                <div className="settings__main__button__container">
                    <button onClick={handleDarkmode}>Toggle dark mode</button>
                </div>
            </main>
        </>
    )
}