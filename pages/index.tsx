import React from 'react'
import { NextPage } from 'next'

type Props = {
  pathname: string
}

const Home: NextPage<Props> = ({ pathname }) => (
  <div>Hello, World! We are on {pathname}</div>
)

Home.getInitialProps = async ({ pathname }) => {
  return { pathname }
}

export default Home
