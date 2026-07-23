import heartPng from '../assets/heart.png'

export function ContactCardIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.5 16.5c0-1.8 1.6-3 3.5-3s3.5 1.2 3.5 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15 10h4M15 14h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6.6 3.5 9 6.4a1.6 1.6 0 0 1-.1 2.1L7.3 10a12 12 0 0 0 6.7 6.7l1.5-1.6a1.6 1.6 0 0 1 2.1-.1l2.9 2.4a1.6 1.6 0 0 1 .2 2.3l-1.4 1.6a2.4 2.4 0 0 1-2.3.7C10.8 20.4 3.6 13.2 2 7.1a2.4 2.4 0 0 1 .7-2.3L4.3 3.3a1.6 1.6 0 0 1 2.3.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M4.5 5h15A2.5 2.5 0 0 1 22 7.5v9A2.5 2.5 0 0 1 19.5 19h-15A2.5 2.5 0 0 1 2 16.5v-9A2.5 2.5 0 0 1 4.5 5Zm0 2.3v.2l7.5 5.4 7.5-5.4v-.2z"
        fill="currentColor"
      />
    </svg>
  )
}

export function GlobeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9s1.3-6.5 3.8-9Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function ChevronIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 2.5l2.9 6.3 6.9.7-5.2 4.6 1.6 6.8L12 17.6l-6.2 3.3 1.6-6.8-5.2-4.6 6.9-.7L12 2.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function HeartIcon({ style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        display: 'inline-block',
        backgroundColor: 'currentColor',
        WebkitMaskImage: `url(${heartPng})`,
        maskImage: `url(${heartPng})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        ...style,
      }}
    />
  )
}

export function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 3v16m0 0-5-5m5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function LongArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 24 64" fill="none" {...props}>
      <path d="M12 2v54m0 0-7-7m7 7 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ApplyEditIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M13.5 3.5H6.5A2 2 0 0 0 4.5 5.5v13a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 9.5h6M8 13h6M8 16.5h3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M18.4 2.9a1.9 1.9 0 0 1 2.7 2.7l-5.7 5.7-3.2.9.9-3.2 5.3-6.1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function EqualHousingIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M2.5 10.8 12 3.6l9.5 7.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 9.6V20.4h14V9.6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8.6 13.6h6.8M8.6 16.6h6.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  )
}
