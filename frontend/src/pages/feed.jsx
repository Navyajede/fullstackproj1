import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/post')
      .then((res) => {
        setPosts(res.data.post)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <section className='feed-section'>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className='post-card'>
            <img
              src={post.image}
              alt={post.caption}
              className='post-image'
            />

            <p className='post-caption'>
              {post.caption}
            </p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </section>
  )
}

export default Feed