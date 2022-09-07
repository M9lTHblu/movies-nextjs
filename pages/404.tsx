import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Error = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div>
    <h1>404</h1>
      <p>Page Not Found!</p>
    </div>
  )
}

export default Error
