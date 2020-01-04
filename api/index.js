export default (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('title: ' + req.method)
  // res.status(200).end(JSON.stringify({ title: 'Google' }))
  res.writeHead(200, { 'Content-Type': 'application/json' })
  // res.write()
  res.end(JSON.stringify({ title: 'タイトル1' }))
}
