'use strict'

module.exports = recipient => {
  return {
    type: recipient.type || 'privatPerson',
    navn: recipient.name || undefined,
    adresse1: recipient.address1 || undefined,
    adresse2: recipient.address2 || undefined,
    adresse3: recipient.address3 || undefined,
    postnr: recipient.postalCode || undefined,
    poststed: recipient.postalCity || undefined,
    fodselsnr: recipient.personalId || undefined,
    orgnr: recipient.organizationId || undefined
  }
}
