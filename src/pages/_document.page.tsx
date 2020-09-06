import React from 'react'
import Document, { DocumentContext } from 'next/document' // eslint-disable-line no-shadow
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

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
