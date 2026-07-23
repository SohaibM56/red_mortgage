function buildVCard(profile) {
  const [firstName, ...rest] = profile.name.split(' ')
  const lastName = rest.join(' ')

  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${lastName};${firstName};;;`,
    `FN:${profile.name}`,
    `TITLE:${profile.title}`,
    `ORG:${profile.company.name}`,
    `TEL;TYPE=CELL:${profile.phone.tel}`,
    `EMAIL:${profile.email}`,
    `URL:${profile.website.url}`,
    'END:VCARD',
  ].join('\r\n')
}

export function downloadVCard(profile) {
  const vcard = buildVCard(profile)
  const blob = new Blob([vcard], { type: 'text/vcard' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = `${profile.name.replace(/\s+/g, '_')}.vcf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
