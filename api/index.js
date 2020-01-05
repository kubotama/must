import url from 'url'

/* eslint-disable no-console */
export default (req, res, next) => {
  console.log('url: ' + JSON.stringify(req.url))
  // eslint-disable-next-line node/no-deprecated-api
  const targetUrl = url.parse(req.url, true).query.url
  console.log('target url: ' + targetUrl)

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ title: 'タイトル1' }))
}
