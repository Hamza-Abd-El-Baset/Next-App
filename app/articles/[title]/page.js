import React from 'react'

export default function showArticle(props) {
  const {params, searchParams} = props
  const {title} = params
  
  console.log(title)
  console.log(searchParams)
    return (
    <div>
        <h1>Show Article</h1>
        <h1>{title}</h1>
    </div>
  )
}
