import Header from "../../Components/Header/Header";
import LogoLink from "../../Components/LogoLink/LogoLink";
import NewsArticle from "../../Components/NewsArticle/NewsArticle";

export default function Archive({ bookmarks, setBookmarks }) {
    return (
        <>
            <header>
                <LogoLink /> {/* burde lave header om til et mere genbrugelig element så jeg bare kan gøre <Header /> */}
            </header>
            <main>
                <ul> {bookmarks.length === 0 ?
                    ("You haven't bookmarked any articles yet.")
                    :
                    (bookmarks.map((bookmark) => {
                        return (
                            <NewsArticle bookmarks={bookmarks} setBookmarks={setBookmarks} articleImage={bookmark.article_image} articleLink={bookmark.article_link} headingLevel={2} headingText={bookmark.article_heading} paragraphText={bookmark.article_paragraph} />
                        )
                    }))
                }
                </ul>
            </main>
        </>
    )
}