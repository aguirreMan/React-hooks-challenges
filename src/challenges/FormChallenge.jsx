import { useState } from 'react'

export default function FormChallenge() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})

    function handleSubmit(e) {
        e.preventDefault()
        const newErrors = {}

        if (!name.trim()) newErrors.name = 'Name is required'
        if (!email.includes('@')) newErrors.email = 'Email must include "@"'
        if (message.length < 15) newErrors.message = 'Message must be at least 15 characters long'

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        // if valid
        alert('Form submitted successfully!')
        setName('')
        setEmail('')
        setMessage('')
        setErrors({})
    }

    return (
        <div className='mx-auto max-w-md rounded-lg bg-slate-900 p-6 shadow'>
            <h1 className='mb-6 text-2xl font-semibold text-white'>
                Contact Us
            </h1>

            <form onSubmit={handleSubmit} className='space-y-5'>
                {/* Name */}
                <div>
                    <label className='mb-1 block text-sm font-medium 
                    text-slate-300'>
                        Name
                    </label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='w-full rounded-md border border-slate-700 
                        bg-slate-800 px-3 py-2 text-white focus:outline-none 
                        focus:ring-2 focus:ring-blue-500'
                    />
                    {errors.name && (
                        <p className='mt-1 text-sm text-red-400'>
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className='mb-1 block text-sm font-medium 
                    text-slate-300'>
                        Email
                    </label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className='w-full rounded-md border border-slate-700
                         bg-slate-800 px-3 py-2 text-white focus:outline-none 
                         focus:ring-2 focus:ring-blue-500'
                    />
                    {errors.email && (
                        <p className='mt-1 text-sm text-red-400'>
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label className='mb-1 block text-sm font-medium 
                    text-slate-300'>
                        Message
                    </label>
                    <textarea
                        name='message'
                        rows={4}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        className='w-full rounded-md border
                         border-slate-700 bg-slate-800 px-3 py-2
                          text-white focus:outline-none focus:ring-2 
                          focus:ring-blue-500'
                    />
                    {errors.message && (
                        <p className='mt-1 text-sm text-red-400'>
                            {errors.message}
                        </p>
                    )}
                </div>

                {/* Submit */}
                <button
                    type='submit'
                    className='w-full rounded-md bg-blue-500 py-2 
                    font-medium text-white hover:bg-blue-600 transition-colors'
                >
                    Send Message
                </button>
            </form>
        </div>
    )

}