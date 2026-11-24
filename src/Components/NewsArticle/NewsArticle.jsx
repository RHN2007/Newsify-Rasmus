import { Link } from 'react-router'
import { CiBookmark } from "react-icons/ci";
import './NewsArticle.scss'
import { useRef, useState } from 'react';

export default function NewsArticle({ articleImage, articleLink, headingLevel, headingText, paragraphText }) {
    const Heading = `h${headingLevel}`
    const [touchStart, setTouchStart] = useState()
    const slideElement = useRef(null)

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
                <button className='article__bookmark'>
                    <CiBookmark />
                </button>
            </li>

        </>
    )
}