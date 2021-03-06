import { useState, useEffect } from 'react'
import { Spinner, Form } from 'react-bootstrap'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'
import FlickrCard from '../components/FlickrCard'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])  
  const [filteredItems, setFilteredItems] = useState([])
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    fetch('/api/flickr')
    .then(res => res.json())
    .then(resJson => {
      setItems(resJson.items)
      setFilteredItems(resJson.items)
      setLoading(false)
    })
  }, [])
  
  useEffect(() => {
    setFilteredItems(items.filter(item => (item.title + item.tags).includes(keyword)))
  }, [keyword])

  const FlickrCardList = filteredItems.map(item => 
    <FlickrCard key={item.author_id + item.published} data = {item} />
  )
  return (
    <div className={styles.container}>
      <Head>
        <title>Flickr Demo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        { loading && <Spinner style={{ marginTop: 50 }} animation="border" /> }
        { !loading &&
          <div className={styles.keyword}>  
            <Form.Control type="text" placeholder="Search by title & tags" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
          </div>
        }
        { !loading && FlickrCardList }
      </main>
    </div>
  )
}
