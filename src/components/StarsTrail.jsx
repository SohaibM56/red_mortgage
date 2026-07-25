import { StarIcon } from './icons'

const STARS = [
  { top: 3, left: 24, size: 18, color: '#f2dfa3' },
  { top: 5, left: 22, size: 24, color: '#d4af37' },
  { top: 8, left: 34, size: 16, color: '#f5e7bb' },
  { top: 11, left: 6, size: 30, color: '#d4af37' },
  { top: 14, left: 32, size: 20, color: '#f2dfa3' },
  { top: 17, left: 10, size: 21, color: '#e0bf5c' },
  { top: 20, left: 9, size: 35, color: '#d4af37' },
  { top: 24, left: 33, size: 20, color: '#efd991' },
  { top: 29, left: 35, size: 18, color: '#e0bf5c' },
  { top: 32, left: 8, size: 26, color: '#c8981f' },
  { top: 35, left: 7, size: 29, color: '#bf8f1a' },
  { top: 39, left: 31, size: 21, color: '#f5e7bb' },
  { top: 44, left: 33, size: 18, color: '#f5e7bb' },
  { top: 47, left: 9, size: 25, color: '#e6c771' },
  { top: 50, left: 6, size: 32, color: '#d4af37' },
  { top: 55, left: 32, size: 19, color: '#f2dfa3' },
  { top: 60, left: 34, size: 21, color: '#e6c771' },
  { top: 63, left: 8, size: 25, color: '#c8981f' },
  { top: 66, left: 10, size: 26, color: '#c8981f' },
  { top: 70, left: 33, size: 20, color: '#efd991' },
  { top: 76, left: 30, size: 17, color: '#efd991' },
  { top: 80, left: 8, size: 25, color: '#d4af37' },
  { top: 85, left: 31, size: 18, color: '#f5e7bb' },
]

const STAGGER_MS = 55

export function StarsTrail({ active, burstId }) {
  return (
    <div className="stars-trail" aria-hidden="true">
      {active && (
        <div className="stars-trail-burst" key={burstId}>
          {STARS.map((star, index) => (
            <StarIcon
              key={index}
              className="stars-trail-star"
              style={{
                top: `${star.top}%`,
                left: star.left,
                width: star.size,
                height: star.size,
                color: star.color,
                animationDelay: `${index * STAGGER_MS}ms`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
