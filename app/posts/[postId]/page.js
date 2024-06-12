import PostDetails from '@/app/components/postDetails'
import React, { Suspense } from 'react'

export default async function postDetails({params}) {
    const {postId} = params

    const loaadingJSX = (<div><h1>Loading ...</h1></div>)

  return (
    <div style={{padding: "20px"}}>
        <h1>Post Details</h1>
        <Suspense fallback={loaadingJSX}>
            <PostDetails postId={postId}/>
        </Suspense>
    </div>
  )
}
