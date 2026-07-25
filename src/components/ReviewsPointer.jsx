import { StarIcon, LongArrowDownIcon } from './icons'

export function ReviewsPointer({ onReviewsClick, reviewsUrl }) {
  return (
    <div className="reviews-pointer">
      <div className="reviews-pointer-star">
        <StarIcon className="reviews-pointer-star-icon" />
      </div>
      <LongArrowDownIcon className="reviews-pointer-arrow" />
      <a
        className="reviews-pointer-label"
        href={reviewsUrl}
        target="_blank"
        rel="noreferrer"
        onClick={onReviewsClick}
      >
        See My Reviews
      </a>
    </div>
  )
}
