"use client";

import React, { useEffect, useState } from 'react'

export default function ClientTodo() {
    const [todo, setTodo] = useState({})
    useEffect(async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const result = await response.json() 
        setTodo(result) 
        return () => {}
    },[])

  return (
    <div>
        <h1>Client Todo: {todo?.title}</h1>
    </div>
  )
}
