import React from 'react'
import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html translate="no">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
