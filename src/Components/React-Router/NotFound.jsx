import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">404 — Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/" className="underline">Go Home</Link>
    </div>
  )
}
