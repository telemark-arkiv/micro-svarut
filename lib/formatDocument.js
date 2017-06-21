'use strict'

module.exports = document => {
  return {
    filsti: document.data,
    filnavn: document.fileName,
    mimetype: document.mimetype || 'application/pdf'
  }
}
