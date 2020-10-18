import App from "next/app";

import Head from "next/head";
import AOS from "aos";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../styles";
import "aos/dist/aos.css";
export default class MyApp extends App {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          ></meta>
          <meta name="description" content="Description"></meta>
          <meta name="keywords" content="Keywords" />
          <title>Barber Day Business </title>
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;1,400;1,500&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;1,300&display=swap"
            rel="stylesheet"
          ></link>

          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon_logo.svg" sizes="16x16" />
          <link rel="icon" href="/favicon_logo.svg" sizes="32x32" />

          <link rel="apple-touch-icon" href="/favicon_logo.svg"></link>
          <meta name="theme-color" content="#317EFB" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
