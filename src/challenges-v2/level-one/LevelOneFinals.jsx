import { useState, useEffect } from 'react'

export default function LevelOneFinals() {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectCategory, setSelectedCategory] = useState('all')
  const [posts, setPosts] = useState([])
  const [selectedPosts, setSelectedPosts] = useState([])

  function fetchPosts() {
    setLoading(true)
    setErrors(null)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        setLoading(false)
        console.log(data)
      })
      .catch(err => {
        setErrors(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])


  function handleCheckboxChange(postId) {
    setSelectedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    )
  }

  function selectAllCheckBoxes() {
    if(selectedPosts.length === filteredPosts.length) {
      setSelectedPosts([])
    } else {
      setSelectedPosts(filteredPosts.map(post => post.id))
    }
  }

  const categories = ['all', ...new Set(posts.map(post => post.userId))]


  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectCategory === 'all' || post.userId.toString() === selectCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className='p-4'>
      {loading && <p>Loading...</p>}
      {errors && <p>Error: {errors.message}</p>}

      <div className='mb-5 flex gap-4'>
        <input
          type='text'
          placeholder='Search by title or description...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <select
          value={selectCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : `Category ${category}`}
            </option>
          ))}
        </select>
      </div>

      {filteredPosts.length > 0 && (
        <div>
          <button onClick={selectAllCheckBoxes} style={{ padding: '5px 10px' }}>
            {selectedPosts.length === filteredPosts.length ? 'Deselect All' : 'Select All'}
          </button>
          <span style={{ marginLeft: '10px' }}>
            Selected: {selectedPosts.length} of {filteredPosts.length}
          </span>
        </div>
      )}

      <div className='flex flex-col gap-4'>
        {filteredPosts.map(post => (
          <div
            key={post.id}
            style={{
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              backgroundColor: selectedPosts.includes(post.id) ? '#f0f7ff' : 'white'
            }}
          >
            <div className='flex align-items-center flex-start gap-4'>
              <input
                type="checkbox"
                checked={selectedPosts.includes(post.id)}
                onChange={() => handleCheckboxChange(post.id)}
                className='mt-4'
              />
              <div>
                <h3 style={{ margin: '0 0 5px 0' }}>
                  {post.title}
                  <span className='ml-4'>
                    Category: {post.userId}
                  </span>
                </h3>
                <p>{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && !loading && (
        <p>No products found matching your criteria.</p>
      )}
    </div>
  )
}
