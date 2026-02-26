import { useState, useEffect} from 'react'

export default function UserPosts() {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(null)
  const [activeIdPost, setActiveIdPost] = useState(null)
  const [posts, setPosts] = useState([])
   const [togglePosts, setToggledPosts] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  function fetchPosts() {
    setLoading(true)
    setErrors(null)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(err => {
        setErrors(err)
        setLoading(false)
      })
  }
  const numberOfPostsToRender = 3
   const visiblePosts = togglePosts ? posts : posts.slice(0, numberOfPostsToRender)


  return (
    <div>
      {loading && <p>Loading...</p>}
      {errors && <p>Error: {errors.message}</p>}
      {visiblePosts.map(post => (
        <div key={post.id}>
          <h3 onClick={() =>
            setActiveIdPost(prev =>
              prev === post.id ? null : post.id
            )
          }>
            {post.title}
          </h3>


          {activeIdPost === post.id && (
            <p>{post.body}</p>
          )}
        </div>
      ))}
      {posts.length > numberOfPostsToRender && (
        <button onClick={() => setToggledPosts(!togglePosts)}>
          {togglePosts ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  )
}
