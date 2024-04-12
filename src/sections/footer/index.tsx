import style from "./index.sass"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.socialsMedias}>
                <span>
                    <a href="https://github.com/Helya-Moradi" target='_blank'>
                      <FontAwesomeIcon icon={faGithub} className={style.icon}/>
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/helya-moradi" target='_blank'>
                      <FontAwesomeIcon icon={faLinkedinIn} className={style.icon}/>
                    </a>
                </span>
            </div>
            <div className={style.copyright}>
                © 2024 by <a href="#">Helya Moradi</a>, All rights reserved.
            </div>
        </div>
    );
}

export default Footer;