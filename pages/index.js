import Head from 'next/head'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Your Site Title</title>
        <meta
          name='description'
          content='This is the home page of your site.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
