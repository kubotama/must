/* eslint-disable no-console */
export default (req, res, next) => {
  // console.log('header: ' + JSON.stringify(req.headers))
  console.log('url: ' + JSON.stringify(req.url))
  // res.status(200).end(JSON.stringify({ title: 'Google' }))
  res.writeHead(200, { 'Content-Type': 'application/json' })
  // res.write()
  res.end(JSON.stringify({ title: 'タイトル1' }))
}
