import React from 'react'
import PostItem from './PostItem'

function Posts({list}) {
  return (
    <ul className="posts">
      {list.map(item => <PostItem key={item.id} info={item}/>)}
    </ul>
  )
}

export default Posts
