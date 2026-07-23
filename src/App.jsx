import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { profile } from './data/profile'
import { downloadVCard } from './utils/vcard'
import { ContactCardIcon, ApplyEditIcon, ChevronIcon } from './components/icons'
import { ContactList } from './components/ContactList'
import { HeartsTrail } from './components/HeartsTrail'
import { ReviewsPointer } from './components/ReviewsPointer'
import { ReviewsCarousel } from './components/ReviewsCarousel'
import { Footer } from './components/Footer'
import './App.css'

const MAX_CARD_WIDTH = 430
const HEARTS_BURST_DURATION_MS = 3300

function useFillScreen(ref) {
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    function fit() {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const cardWidth = Math.min(viewportWidth, MAX_CARD_WIDTH)

      el.style.transform = 'none'

      let width = cardWidth
      let scale = 1
      for (let pass = 0; pass < 4; pass++) {
        el.style.width = `${width}px`
        const contentHeight = el.scrollHeight
        scale = contentHeight > 0 ? viewportHeight / contentHeight : 1
        width = cardWidth / scale
      }

      el.style.width = `${width}px`
      const finalHeight = el.scrollHeight
      scale = finalHeight > 0 ? viewportHeight / finalHeight : 1

      el.style.transform = `scale(${scale})`
      el.style.left = `${(viewportWidth - cardWidth) / 2}px`
    }

    fit()
    window.addEventListener('resize', fit)
    window.addEventListener('orientationchange', fit)

    const images = Array.from(el.querySelectorAll('img'))
    images.forEach((img) => {
      if (!img.complete) img.addEventListener('load', fit)
    })

    return () => {
      window.removeEventListener('resize', fit)
      window.removeEventListener('orientationchange', fit)
      images.forEach((img) => img.removeEventListener('load', fit))
    }
  }, [ref])
}

function App() {
  const pageRef = useRef(null)
  useFillScreen(pageRef)

  const [heartsActive, setHeartsActive] = useState(false)
  const [heartsBurstId, setHeartsBurstId] = useState(0)
  const heartsTimeoutRef = useRef(null)

  function triggerHearts() {
    setHeartsBurstId((id) => id + 1)
    setHeartsActive(true)
    clearTimeout(heartsTimeoutRef.current)
    heartsTimeoutRef.current = setTimeout(triggerHearts, HEARTS_BURST_DURATION_MS)
  }

  useEffect(() => {
    triggerHearts()
    return () => clearTimeout(heartsTimeoutRef.current)
  }, [])

  return (
    <div className="viewport">
      <div className="page" ref={pageRef}>
        <div className="top-section">
          <HeartsTrail active={heartsActive} burstId={heartsBurstId} />

          <header className="profile-header">
            <img src={profile.profileImage} alt={profile.name} className="profile-photo" />
            <img src={profile.logoImage} alt={profile.company.name} className="profile-logo" />
          </header>

          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-title">{profile.title}</p>
          <p className="profile-bio">{profile.bio}</p>

          <button
            type="button"
            className="save-contact-button"
            onClick={() => downloadVCard(profile)}
          >
            <ContactCardIcon className="save-contact-icon" />
            Save to Contact
          </button>

          <div className="contact-section">
            <ContactList profile={profile} />
            <ReviewsPointer onReviewsClick={triggerHearts} reviewsUrl={profile.reviewsUrl} />
          </div>
        </div>

        <ReviewsCarousel reviews={profile.reviews} rating={profile.rating} />

        <a
          className="apply-cta"
          href={`${profile.applyUrl}?time=${Date.now()}`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="apply-cta-label">
            <ApplyEditIcon className="apply-cta-icon" />
            APPLY HERE
          </span>
          <ChevronIcon className="apply-cta-chevron" />
        </a>
        <p className="apply-cta-subtitle">Start your mortgage journey today!</p>

        <Footer profile={profile} />
      </div>
    </div>
  )
}

export default App
