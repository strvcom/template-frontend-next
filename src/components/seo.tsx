import React from 'react'
import Head from 'next/head'

interface Props {
  title: string
  description: string
}

export const SEO = ({ title, description }: Props) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
    </Head>
  )
}
