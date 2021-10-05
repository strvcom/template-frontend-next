import React from 'react'
import { render, screen } from '@testing-library/react'

import { Home } from '.'

describe('pages/home', () => {
  it('should render home page', () => {
    render(<Home />)
    expect(screen.queryByText('Home page')).not.toBeNull()
  })
})
