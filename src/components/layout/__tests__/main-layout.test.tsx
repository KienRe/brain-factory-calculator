import React from 'react'
import { render, screen } from '@testing-library/react'
import { MainLayout } from '../main-layout'

describe('MainLayout', () => {
  it('renders the main layout sections', () => {
    render(<MainLayout />)
    
    // Check for main sections
    expect(screen.getByText(/Production graph/i)).toBeInTheDocument()
    expect(screen.getByText('Inputs')).toBeInTheDocument()
    expect(screen.getByText('Outputs')).toBeInTheDocument()
    expect(screen.getByText('Options')).toBeInTheDocument()
    
    // Check for buttons
    const addButtons = screen.getAllByRole('button')
    expect(addButtons).toHaveLength(3) // Two '+' buttons and one 'Manage Recipes' button
  })
})