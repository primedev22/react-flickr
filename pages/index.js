import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [title, setTitle] = useState('')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/api/flickr')
    .then(res => res.json())
    .then(resJson => {
      setTitle(resJson.title)
      setItems(resJson.items)
    })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Flickr Demo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>
    </div>
  )
}
