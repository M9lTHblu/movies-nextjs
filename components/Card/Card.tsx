import styles from './Card.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Movie } from '../types'

export const Card = ({
  id,
  title,
  year,
  actors,
  id_kinopoisk,
  description,
  genres,
  directors,
  collapse,
}: Movie) => {
  const image = `https://www.kinopoisk.ru/images/film_big/${id_kinopoisk}.jpg`

  return (
    <article className={styles.card}>
      <div className={styles.img}>
        <Image
          src={image}
          priority
          objectFit='cover'
          objectPosition='center'
          layout='fixed'
          width={112}
          height={168}
          alt=''
        />
      </div>
      <div className={styles.body}>
        <div className={styles.row}>
          <Link href={`/${id}`}><h2 className={styles.title}>{title}</h2></Link>
          {collapse?.duration && (
            <div className={styles.duration}>
              <span>{collapse.duration}</span>
              <svg width='24' height='24' viewBox='0 0 24 24'
                   xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M18 3V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3H18ZM8
                  17H6V15H8V17ZM8 13H6V11H8V13ZM8 9H6V7H8V9ZM14 19H10V5H14V19ZM18
                  17H16V15H18V17ZM18 13H16V11H18V13ZM18 9H16V7H18V9Z'
                />
              </svg>
            </div>)}
        </div>
        <p>Год: {year}, {genres?.join(', ')}</p>
        <p>Режиссёр: {directors?.join(', ')}</p>
        <div className={styles.actors}>
          Актеры:
          <ul className={styles.list}>
            {actors && actors.map((actor, index) =>
              <li key={index}>
                {actor}
                {index < actors.length - 1 ? ',' : null}
                &#160;
              </li>,
            )}
          </ul>
        </div>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </article>
  )
}
