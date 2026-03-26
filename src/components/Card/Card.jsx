import './Card.css'
import { Link } from 'react-router-dom'

function Card ({id, title, cover }) {
    return (
        <Link to= {`/logement/${id}`} className='card'>
            <img src= {cover} alt= {title} className='card__image' />
            <p className='card__title'> {title} </p>
        </Link>
    )
}

export default Card
