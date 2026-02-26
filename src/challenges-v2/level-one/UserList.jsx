import { useState, useEffect } from 'react'
export default function UserList() {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(null)
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  function fetchUsers() {
    setLoading(true)
    setErrors(null)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(error => {
        setErrors(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    fetchUsers()
  }, []) // so here we only want this effect to run only once on mount which is why we have the array empty
  const filterUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div> {loading && <p>Loading...</p>}
      {errors && <p>Error: {errors.message}</p>}
      <input type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filterUsers.length > 0 ? (filterUsers.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>))) :
        <p>No users found</p>}
      <button className='bg-green-500 px-4 py-4' onClick={() => fetchUsers()}>Refetch users</button>
    </div>
  )
}
