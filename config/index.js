'use strict'

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  SVARUT_URL: process.env.SVARUT_URL || 'https://username:password@test.svarut.ks.no/tjenester/forsendelseservice/ForsendelsesServiceV5',
  SVARUT_ACTION: process.env.SVARUT_ACTION || 'http://www.ks.no/svarut/services/ForsendelsesServiceV5/sendForsendelse'
}
