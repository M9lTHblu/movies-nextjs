import styles from './CardList.module.scss'
import { Movies } from '../types'
import { Card } from '../Card'

export const CardList = ({movies}: Movies) => {
  return (
    <ul className={styles.list}>
      {movies && movies.map((movie) =>
        <li key={movie.id}>
          <Card {...movie} />
        </li>,
      )}
    </ul>
  )
}
