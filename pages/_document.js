import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {}
        <meta name='description' content='Your site description.' />
        <meta property='og:title' content='Your Site Title' />
        <meta property='og:description' content='Your site description.' />
        <meta property='og:type' content='website' />
        <meta name='robots' content='index, follow' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
