import 'the-new-css-reset/css/reset.css'
import '../styles/globals.scss'

import { Layout } from '../components/Layout/Layout'
import { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
