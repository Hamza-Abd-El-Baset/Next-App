import React from 'react'
import ClientTodo from '../components/todo'

export default async function Posts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const todo = await response.json() 

  return (
    <div>
      <h1>Posts Page</h1>
      <h1>Server Todo: {todo?.title}</h1>
      {/* <ClientTodo /> */}
    </div>
  )
}
