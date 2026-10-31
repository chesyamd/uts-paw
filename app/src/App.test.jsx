import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'

// Contoh test. Tambahkan minimal 5 test buatan sendiri (butir rubrik F1).
test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/*']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})
test('page Beranda dapat dibuka', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Beranda' })).toBeInTheDocument()
})
test('page Statistik dapat dibuka', () => {
  render(
    <MemoryRouter initialEntries={['/statistik']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Statistik' })).toBeInTheDocument()
})
test('page Tambah Koleksi dapat dibuka', () => {
  render(
    <MemoryRouter initialEntries={['/tambah']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Tambah Koleksi' })).toBeInTheDocument()
})
test('page Tentang dapat dibuka', () => {
  render(
    <MemoryRouter initialEntries={['/tentang']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Tentang' })).toBeInTheDocument()
})
