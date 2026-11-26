import { CiBookmark } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import './NewsArticle.scss'
import { useRef, useState } from 'react';

export default function NewsArticle({ bookmarks, setBookmarks, articleImage, articleLink, headingLevel, headingText, paragraphText }) {
    const Heading = `h${headingLevel}`
    const [touchStart, setTouchStart] = useState()
    const slideElement = useRef(null)

    const [isBookmarked, setIsBookmarked] = useState(false)

    function handleTouchStart(event) {
        setTouchStart(event.changedTouches[0].clientX)
    }

    function handleTouchEnd(event) {
        const threshold = 50
        const touchEnd = event.changedTouches[0].clientX
        const touchDifference = touchStart - touchEnd

        if (touchDifference > threshold) {
            slideElement.current.style.transform = `translateX(-7.5rem)`
            slideElement.current.style.overflow = "visible"
        }

        if (touchDifference < -threshold) {
            slideElement.current.style.transform = `translateX(0rem)`
            setTimeout(() => {
                slideElement.current.style.overflow = "hidden"
            }, 300); // vent til animationen er færdig og så gør overflow hidden, ellers ser det mærkeligt ud, der er nok en bedre måde at gøre dette på.
        }

    }

    function handleBookmark() {
        const newBookmark =
        {
            "article_image": articleImage,
            "article_link": articleLink,
            "article_heading": headingText,
            "article_paragraph": paragraphText
        }

        if (bookmarks.length === 0 && !isBookmarked) {
            setBookmarks([newBookmark])
            setIsBookmarked(!isBookmarked)
            return
        }

        const alreadyExists = bookmarks.some(bookmark => bookmark.article_heading === headingText)

        if (!alreadyExists && !isBookmarked) {
            setBookmarks([...bookmarks, newBookmark])
        } else {
            const newArray = bookmarks.filter((bookmark) => bookmark.article_heading !== headingText )
            setBookmarks(newArray)
        }


        setIsBookmarked(!isBookmarked)
    }

    return (
        <>
            <li ref={slideElement} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className="article__listitem">
                <a href={articleLink}>
                    <div className='article__wrapper'>
                        <figure className='article__listitem__figure'>
                            <img src={articleImage} alt="test" />
                        </figure>
                        <div className='article__listitem__text'>
                            <Heading className="article__listitem__text__heading">{headingText}</Heading>
                            <p>{paragraphText}</p>
                        </div>
                    </div>
                </a>
                <button onClick={handleBookmark} className='article__bookmark'>
                    {!isBookmarked ? (<CiBookmark />) : (<FaRegTrashCan />)}
                </button>
            </li>

        </>
    )
}