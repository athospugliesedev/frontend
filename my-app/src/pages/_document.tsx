import { Html, Head, Main, NextScript } from 'next/document'
import { inter } from './_app'

export default function Document() {
  return (
    <Html lang="pt-br" className={inter.className}>
      <Head>
        <title>Na rua</title>
      </Head>
      <body className="bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
