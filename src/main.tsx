import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import { ShopLayout } from './components/ShopLayout'
import Home from './pages/Home'
import Booking from './pages/Booking'
import MyBooking from './pages/MyBooking'
import Admin from './pages/Admin'

const qc = new QueryClient({ defaultOptions: { queries: { staleTime: 30_000, retry: 1 } } })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={qc}>
      <BrowserRouter>
        <Routes>
          <Route path="/s/:shopId" element={<ShopLayout />}>
            <Route index element={<Home />} />
            <Route path="book" element={<Booking />} />
            <Route path="my" element={<MyBooking />} />
            <Route path="admin" element={<Admin />} /> {/* <--- НОВАЯ СТРОКА */}
          </Route>
          <Route path="*" element={<Navigate to="/s/demo" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
