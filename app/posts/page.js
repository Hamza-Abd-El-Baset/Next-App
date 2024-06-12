import React from 'react'
import ClientTodo from '../components/todo'
import Link from 'next/link'

export default async function Posts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    // {
    //   cache: 'no-store'
    // }
    {
      next: {
        revalidate: 120 /* 120 seconds before regeneration */
      }
    }
  )
  const posts = await response.json() 
  const postsJSX = posts.map(post => (
    <Link href={`/posts/${post.id}`} style={{
      width: "70%",
      background: "white",
      padding: "10px",
      borderRadius: "10px",
      color: "black",
      marginTop: "20px"
    }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Link>
  )) 

  return (
    <div>
      <h1>Posts Page</h1>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
      >
        {postsJSX}
      </div>
      {/* <ClientTodo /> */}
    </div>
  )
}
