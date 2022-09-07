import styles from './Header.module.scss'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import logo from '../../public/logo.svg'

export const Header = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }


    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${styles.header} ${isScrolling ? styles.scroll : ''}`}>
      <div className='container'>
        <div className={styles.inner}>
          <Image
            src={logo}
            width={366}
            height={48}
            layout='fixed'
            alt='Id now'
          />
        </div>
      </div>
    </header>
  )
}
