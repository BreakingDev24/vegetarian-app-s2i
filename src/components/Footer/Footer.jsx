import FooterCSS from './Footer.module.css'
import logo from '../../assets/img/logo.png'

export default function Footer(){
    
    function getYear() {
        return new Date().getFullYear();
      }

    return (
        <>
            <footer>
                <div className={FooterCSS['footer-elements']}>

                <div className={FooterCSS['logo-container']}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={FooterCSS['contact-container']}>
                    <p>Contacts:</p>
                    <p>info@example.com</p>
                    <p>555 5555555</p>
                </div>

                <div className={FooterCSS['social-container']}>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/antonio-avolio-015936232/" className={FooterCSS['social-link']}><i className="bi bi-linkedin"></i></a></li>
                        <li><a href="https://github.com/BreakingDev24" className={FooterCSS['social-link']}><i className="bi bi-github"></i></a></li>
                    </ul>
                </div>

                <div className={FooterCSS['copyright-container']}>
                <p>Made by BreakingDev24 &#169; <span className="copyright-year">{getYear()}</span> for Start2Impact</p>
                </div>
                </div>
            </footer>
        </>
    )
}