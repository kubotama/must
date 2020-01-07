import url from 'url'
import { JSDOM } from 'jsdom'
import request from 'request'
import HttpStatus from 'http-status-codes'

/* eslint-disable no-console */
export default (req, res, next) => {
  console.log('url: ' + JSON.stringify(req.url))
  // eslint-disable-next-line node/no-deprecated-api
  const targetUrl = url.parse(req.url, true).query.url
  console.log('target url: ' + targetUrl)

  request(targetUrl, (e, response, body) => {
    if (e) {
      console.error(e)
    }
    const dom = new JSDOM(body)
    const title = dom.window.document.getElementsByTagName('title')[0]
      .textContent
    console.log(`title: ${title}`)
    res.writeHead(HttpStatus.OK, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ title }))
  })
}
