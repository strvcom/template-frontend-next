import React from 'react'
import type { NextPage } from 'next'

import { SEO } from '~/components/seo'
import { Logo } from '~/components/logo'

import { Page } from './style'

export const Home: NextPage = () => {
  return (
    <Page>
      <SEO
        title="STRV Next.js app"
        description="change me before going to production"
      />
      <Logo />
      <span>Home page</span>
    </Page>
  )
}
