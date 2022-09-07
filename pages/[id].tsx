import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Card } from '../components/Card'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {id} = context.params
  const resp = await fetch(`${process.env.API_URL_MOVIE}${id}`)
  const movieData = (await resp.json()).data


  if (!movieData) {
    return {
      notFound: true
    }
  }


  return {
    props: {
      movie: {
        id: movieData.id,
        title: movieData.title,
        year: movieData.year,
        actors: movieData.actors,
        id_kinopoisk: movieData.id_kinopoisk,
        description: movieData.description,
        genres: movieData.genres,
        directors: movieData.directors,
        collapse: movieData.collapse,
      }
    },
  }
}

const MoviePage = ({ movie }) => {

  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport'
              content='width=device-width,
              user-scalable=no,
              initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' />
        <meta name='description' content='
        На этой странице вы получите краткую информацию о фильме:
        жанр фильма,
        кто режиссёр этого фильма,
        актёрский состав,
        год выхода картины на большие экраны,
        длительность фильма и краткое описание сюжета
        ' />
        <title>Movie</title>
      </Head>
      <Card {...movie} />
    </>
  )
}

export default MoviePage
