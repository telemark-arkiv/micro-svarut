[![Build Status](https://travis-ci.org/telemark/micro-svarut.svg?branch=master)](https://travis-ci.org/telemark/micro-svarut)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/micro-svarut.svg)](https://greenkeeper.io/)

# micro-svarut

ldap auth microservice

## config docker.env

```bash
NODE_ENV=production
JWT_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
SVARUT_URL=https://username:password@test.svarut.ks.no/tjenester/forsendelseservice/ForsendelsesServiceV5
SVARUT_ACTION=http://www.ks.no/svarut/services/ForsendelsesServiceV5/sendForsendelse
```

## API

### POST ```/send```

```json
{
  "tittel": "SvarUt testdokument",
  "dokumenter": [
    {
      "filsti": "base64data",
      "filnavn": "skoleskyss_avslag_vedtak.pdf",
      "mimetype": "application/pdf"
    }
  ],
  "forsendelse": {
    "avgivendeSystem": "node-svarut test",
    "konteringskode": "1111",
    "krevNiva4Innlogging": false,
    "kryptert": false,
    "kunDigitalLevering": false
  },
  "mottaker": {
    "type": "privatPerson",
    "navn": "Terje Tverrtryne",
    "adresse1": "Skogsveien 42",
    "adresse2": "",
    "adresse3": "",
    "postnr": "3710",
    "poststed": "Skien",
    "fodselsnr": "01029400470"
  },
  "printkonfigurasjon": {
    brevtype: "BPOST",
    fargePrint: true,
    tosidig: false
  }
}

## License

[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/micro-svarut.png "Robohash image of micro-svarut")
