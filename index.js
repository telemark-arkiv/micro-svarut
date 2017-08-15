'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { json, send } = require('micro')
const svarUt = require('svarut')
const config = require('./config')
const logger = require('./lib/logger')
const format = require('./lib/format')
const validateJwt = require('./lib/validate-jwt')

module.exports = async (req, response) => {
  const {query} = await parse(req.url, true)
  let data = ['POST', 'PUT'].includes(req.method) ? await json(req) : query

  if (['POST'].includes(req.method)) {
    const jwt = req.headers.authorization
    const decoded = await validateJwt({jwt: jwt, tokenKey: config.JWT_SECRET})
    if (decoded) {
      logger(['Validated jwt'])
      let formatedData = format(data)
      formatedData.config = {
        url: config.SVARUT_URL,
        action: config.SVARUT_ACTION
      }
      console.log(formatedData)
      svarUt(formatedData)
        .then(id => {
          logger(['ID from svarut', id])
          send(response, 200, id)
        })
        .catch(err => {
          logger(['Error', err])
          send(response, 500, err.message)
        })
    }
  } else {
    response.setHeader('Content-Type', 'text/html')
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
