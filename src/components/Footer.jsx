import { Fragment } from 'react'
import { EqualHousingIcon } from './icons'
import footerLogo from '../assets/red_tree_logo_h.png'

export function Footer({ profile }) {
  return (
    <footer className="page-footer">
      <img src={footerLogo} alt={profile.company.name} className="page-footer-logo" />
      {profile.company.nmlsNumbers.map((nmls) => (
        <Fragment key={nmls}>
          <span className="page-footer-divider" />
          <span className="page-footer-nmls-item">NMLS {nmls}</span>
        </Fragment>
      ))}
      <span className="page-footer-divider" />
      <div className="page-footer-equal-housing">
        <span className="page-footer-equal-housing-text">Equal Housing Lender</span>
        <EqualHousingIcon className="page-footer-equal-housing-icon" />
      </div>
    </footer>
  )
}
