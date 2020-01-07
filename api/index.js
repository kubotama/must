import url from 'url'
import { JSDOM } from 'jsdom'
import HttpStatus from 'http-status-codes'
import axios from 'axios'

/* eslint-disable no-console */
export default (req, res, next) => {
  console.log(`url: ${JSON.stringify(req.url)}`)
  const targetUrl = new url.URL(req.url, 'http://localhost').searchParams.get(
    'url'
  )
  console.log(`target url: ${targetUrl}`)

  axios.get(targetUrl).then((response) => {
    const body = response.data

    const dom = new JSDOM(body)
    const title = dom.window.document.getElementsByTagName('title')[0]
      .textContent
    console.log(`title: ${title}`)
    res.writeHead(HttpStatus.OK, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ title }))
  })
}
