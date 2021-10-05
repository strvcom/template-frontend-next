import React from 'react'
import type { DocumentContext } from 'next/document'
import NextDocument from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await NextDocument.getInitialProps(ctx)

      const styles = (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )

      return { ...initialProps, styles }
    } finally {
      sheet.seal()
    }
  }
}
