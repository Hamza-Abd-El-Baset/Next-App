import React from 'react'

export const metadata = {
  title: "article page"
}

export default function ArticlesLayout({children}) {
  return (
    <div>
      <h1>Articles Layout</h1>
      <div style={{
        marginTop: "50px",
        background: "blue",
        padding: "20px",
        borderRadius: "10px" 
        }}
        >
          {children}
        </div>
    </div>
  )
}
