import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DesLandingPage } from './index'

describe('DesLandingPage', () => {
  it('renders the main heading', () => {
    render(<DesLandingPage />)
    expect(screen.getByText('Meet Des')).toBeDefined()
  })

  it('renders the about section', () => {
    render(<DesLandingPage />)
    expect(screen.getByText('Who is Des?')).toBeDefined()
  })

  it('renders the fun facts section', () => {
    render(<DesLandingPage />)
    expect(screen.getByText('Fun Facts About Des')).toBeDefined()
  })

  it('renders the image', () => {
    render(<DesLandingPage />)
    const img = screen.getByAltText('Des the Pet')
    expect(img).toBeDefined()
    expect(img.getAttribute('src')).toContain('placehold.co')
  })
})
