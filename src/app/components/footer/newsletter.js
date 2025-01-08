'use client'
import React, { useState } from 'react'

const Newsletter = () => {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        return re.test(String(email).toLowerCase())
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault()
    
        if (!validateEmail(email)) {
          setError('Please enter a valid email address.')
          return
        }
    
        setError('')
        setStatus('loading')
    
        try {
          const response = await fetch('/api/newsletter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
          })
    
          const data = await response.json()
    
          if (!response.ok) throw new Error(data.error)
    
          setStatus('success')
          setMessage('Thanks for subscribing!')
          setEmail('')
          alert('Thanks for subscribing!')
        } catch (error) {
          setStatus('error')
          setMessage(error.message || 'Something went wrong')
          alert(error.message || 'Something went wrong')
        }
      }

      // const handleSubmit = async (e) => {
      //   e.preventDefault();
      //   setIsLoading(true);
      //   try {
      //     console.log(email);
      //     await subscribeToNewsletter(email);
      //     setEmail('');
      //   } catch (error) {
      //     console.error('Subscription error:', error);
      //   } finally {
      //     setIsLoading(false);
      //   }
      // };

  return (
    <>
        <form className="mt-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={status === 'loading'}>
                Subscribe
              </button>
            </form>
    </>
  )
}

export default Newsletter