import { CategoriesProvider } from '@src/Contexts/Categories.context'
import { ContactsProvider } from '@src/Contexts/Contacts.context'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Comfortaa', sans-serif;
    box-sizing: border-box;
    transition: ease-in .1s;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none !important;
  }

  h1 {
    font-weight: 500;
    font-size: 32px;
  }

  h2 {
    font-weight: 500;
    font-size: 28px;
  }

  h3 {
    font-weight: 500;
    font-size: 24px;
  }

  h4 {
    font-weight: 500;
    font-size: 20px;
  }

  h5 {
    font-weight: 500;
    font-size: 18px;
  }

  h6 {
    font-weight: 500;
    font-size: 14px;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  button {
    border-radius: 10px;
    outline: 0;
    border: 0;
  }

  @media screen and (max-width: 1200px) {}
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContactsProvider>
        <CategoriesProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </CategoriesProvider>
      </ContactsProvider>
    </>
  )
}

export default MyApp
