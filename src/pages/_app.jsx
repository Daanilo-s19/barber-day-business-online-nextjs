import App from 'next/app'
import Head from 'next/head'
import I18n from '../lib/i18n'
import AOS from 'aos'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../../styles'
import 'aos/dist/aos.css'

export default class MyApp extends App {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    })
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Barber day Business</title>
          <link rel="icon" href="/favicon_logo.svg" />
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;1,400;1,500&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;1,300&display=swap"
            rel="stylesheet"
          ></link>
          {/* TODO: ADICIONAR DESCRIÇÃO DO SITE */}
          <meta name="description" content="Barber day Busness."></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </Head>
        <GlobalStyle />
        <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
          <Component {...pageProps} />
        </I18n>
      </ThemeProvider>
    )
  }
}
