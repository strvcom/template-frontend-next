import React from 'react'
import { NextPage } from 'next'

import { SEO } from '~/components/seo'

import { Page } from './style'

export const Home: NextPage = () => {
  return (
    <Page>
      <SEO
        title="Next.js app"
        description="change me before going to production"
      />
    </Page>
  )
}
