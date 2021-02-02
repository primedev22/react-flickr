// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  fetch('https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=?')
  .then(response => response.json())
  .then(responseJson => {
    res.status(200).json(responseJson)
  })
  .catch(err => {
    res.status(400).json(err)
  })
}
