import { PhoneIcon, MailIcon, GlobeIcon, InstagramIcon, ChevronIcon } from './icons'

function ContactRow({ icon, label, value, href }) {
  return (
    <a className="contact-row" href={href} target="_blank" rel="noreferrer">
      <span className="contact-row-icon">{icon}</span>
      <span className="contact-row-text">
        <span className="contact-row-label">{label}</span>
        {value && <span className="contact-row-value">{value}</span>}
      </span>
      <ChevronIcon className="contact-row-chevron" />
    </a>
  )
}

export function ContactList({ profile }) {
  return (
    <div className="contact-list">
      <ContactRow
        icon={<PhoneIcon />}
        label="Call"
        value={profile.phone.display}
        href={`tel:${profile.phone.tel}`}
      />
      <ContactRow
        icon={<MailIcon />}
        label="Email"
        value={profile.email}
        href={`mailto:${profile.email}`}
      />
      <ContactRow
        icon={<GlobeIcon />}
        label="Website"
        value={profile.website.display}
        href={profile.website.url}
      />
      <ContactRow
        icon={<InstagramIcon />}
        label="Click to Follow me"
        value=""
        href={profile.instagram}
      />
    </div>
  )
}
