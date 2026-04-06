import './Footer.css'
import logoWhite from '../../assets/images/logo-white.svg'

function Footer() {
  return (
    <footer className='footer'>
      <img src={logoWhite} alt="Kasa" className='footer__logo' />
      <p className='footer__copyright'>
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  )
}

export default Footer
