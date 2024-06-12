import React from 'react'
import Link from 'next/link'
export default function Articles() {
  return (
    <div>
      <p>Articles Page</p>
      <Link href="/"> 
        <button>Go to Home Page</button>
      </Link>
      <Link href="/posts" style={{display: "block"}}>
        <button>Go to Posts Page</button>
      </Link>
    </div>
  )
}
