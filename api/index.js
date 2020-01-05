import url from 'url'
import { JSDOM } from 'jsdom'
// import axios from '@nuxtjs/axios'
import request from 'request'

/* eslint-disable no-console */
export default (req, res, next) => {
  console.log('url: ' + JSON.stringify(req.url))
  // eslint-disable-next-line node/no-deprecated-api
  const targetUrl = url.parse(req.url, true).query.url
  console.log('target url: ' + targetUrl)

  // JSDOM.fromURL(targetUrl).then((dom) => {
  //   const title = dom.window.document.getElementsByTagName('title')[0]
  //     .textContent
  //   res.writeHead(200, { 'Content-Type': 'application/json' })
  //   res.end(JSON.stringify({ title }))
  // })

  // axios.get(targetUrl).then((response) => {
  // console.log(response.data)
  // const dom = new JSDOM(response.data)
  request(targetUrl, (e, response, body) => {
    if (e) {
      console.error(e)
    }
    const dom = new JSDOM(body)
    const title = dom.window.document.getElementsByTagName('title')[0]
      .textContent
    console.log(`title: ${title}`)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ title }))
  })
}
