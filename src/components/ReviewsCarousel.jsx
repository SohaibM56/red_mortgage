import { useEffect, useRef, useState } from 'react'
import { StarIcon } from './icons'
import reviewHouse from '../assets/review_house.svg'

const SWIPE_THRESHOLD = 40
const AUTO_SWIPE_DELAY = 4000

export function ReviewsCarousel({ reviews, rating }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef(null)

  function goTo(index) {
    setActiveIndex((index + reviews.length) % reviews.length)
  }

  useEffect(() => {
    if (reviews.length <= 1) return
    const timer = setTimeout(() => goTo(activeIndex + 1), AUTO_SWIPE_DELAY)
    return () => clearTimeout(timer)
  }, [activeIndex, reviews.length])

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return
    const deltaX = event.changedTouches[0].clientX - touchStartX.current
    if (deltaX > SWIPE_THRESHOLD) goTo(activeIndex - 1)
    else if (deltaX < -SWIPE_THRESHOLD) goTo(activeIndex + 1)
    touchStartX.current = null
  }

  return (
    <section className="reviews">
      <div className="reviews-heading">
        <h2>What My Clients Say</h2>
        <span className="reviews-rating">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} className="reviews-star" />
          ))}
          <span className="reviews-rating-number">{rating.toFixed(1)}</span>
        </span>
      </div>

      <div
        className="review-viewport"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="review-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <span className="review-quote-mark review-quote-mark-open">&ldquo;</span>
              <p className="review-quote">{review.quote}</p>
              <div className="review-author">
                <img
                  className="review-thumb"
                  src={review.thumb || reviewHouse}
                  alt=""
                  aria-hidden="true"
                />
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-stars">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <StarIcon key={i} className="review-star" />
                    ))}
                  </div>
                </div>
                <span className="review-quote-mark review-quote-mark-close">&rdquo;</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="review-dots">
        {reviews.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show review ${index + 1}`}
            className={`review-dot ${index === activeIndex ? 'is-active' : ''}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  )
}
