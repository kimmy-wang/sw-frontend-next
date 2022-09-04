/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CardWrapper } from '..'

test('loads and displays greeting', async () => {
  render(<CardWrapper isBack={true} title={'Title'} />)

  expect(screen.getAllByText('Title').length).toBe(1)
})
