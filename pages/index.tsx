import { GetStaticProps } from 'next'
import Head from 'next/head'
import { CardList } from '../components/CardList'
import { Movies } from '../components/types'

export const getStaticProps: GetStaticProps = async () => {
  const resp = await fetch(process.env.MOVIES)
  const moviesData = (await resp.json()).data

  if (!moviesData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      movies: moviesData.map((movie) => ({
        id: movie.id,
        title: movie.title,
        year: movie.year,
        actors: movie.actors,
        id_kinopoisk: movie.id_kinopoisk,
        description: movie.description,
        genres: movie.genres,
        directors: movie.directors,
        collapse: movie.collapse,
      }))
    },
  }
}

const Home = ({ movies }: Movies) => (
  <>
    <Head>
      <meta name='description' content='
        Список лучших фильмов по версии "КиноПоиска"
         с информацией о каждом фильме.'
      />
      <title>Movies</title>
    </Head>
    <main>
      <section className='container'>
        {!movies && <h1>Loading...</h1>}
        {movies && <CardList movies={movies} />}
      </section>
    </main>
  </>

)

export default Home
