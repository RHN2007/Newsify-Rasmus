import { Link } from 'react-router'
import { CiBookmark } from "react-icons/ci";
import './NewsArticle.scss'

export default function NewsArticle({ articleImage, articleLink, headingLevel, headingText, paragraphText }) {
    const Heading = `h${headingLevel}`

    return (
        <>

            <li className="article__listitem">
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
                <div className='article__bookmark'>
                    <CiBookmark />
                </div>
            </li>

        </>
    )
}