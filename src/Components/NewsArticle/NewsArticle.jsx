import { Link } from 'react-router'
import './NewsArticle.scss'

export default function NewsArticle({ headingLevel, headingText, paragraphText }) {
    const Heading = `h${headingLevel}`

    return (
        <>  <Link>
            <li className="article__list">
                <figure className='article__list__figure'>
                    <img src="https://placehold.co/600x400" alt="test" />
                </figure>
                <div className='article__list__text'>
                    <Heading>{headingText}</Heading>
                    <p>{paragraphText}</p>
                </div>
            </li>
        </Link>
        </>
    )
}