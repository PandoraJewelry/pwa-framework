import App, { Container } from "next/app";
import { I18n as I18nR } from "react-i18next";
import React from 'react'

import i18n from "../i18n";

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <I18nR ns="common" i18n={(pageProps && pageProps.i18n) || i18n } wait>
          {
            (t) => (
              <div>
                <h1>{t('common:integrates_react-i18next')}</h1>
                <Component {...pageProps} />
              </div>
            )
          }
        </I18nR>
      </Container>
    );
  }
}

