import { Card } from 'react-bootstrap'

function FlickrCard({ data }) {
  const title = data.title
  const link = data.link
  const author = data.author.split('"')[1]
  const photo = data.media.m
  const tags = data.tags ? 'Tags: ' + data.tags.split(' ').join(', ') : 'No tags'

  // Get link to author
  const sections = data.description.split('<p>')
  const second = sections[1].split('<a href=')[1]
  const closeID = second.indexOf('>')
  const author_link = second.substr(1, closeID - 2)

  // Get exact description
  let description = 'No description'
  if (sections.length === 4) {
    const last = sections[sections.length - 1];
    description = last.substr(0, last.length - 4)
  }
  
  return (
    <Card style={{ width: '28rem', margin: 10 }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>
          <a href={link}>{title}</a> by <a href={author_link}>{author}</a></Card.Title>
        <Card.Text>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <p>{tags}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default FlickrCard