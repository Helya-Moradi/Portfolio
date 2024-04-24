import style from "./index.sass"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {useEffect, useState} from "react";
import {usePointer} from "src/contexts/scroll";


function Footer() {
    const {addPointer, deletePointer} = usePointer();
    const [year, setYear] = useState(null);

    useEffect(() => {
        const date = new Date;
        setYear(date.getFullYear());
    }, [])

    return (
        <div className={style.footer}>
            <div className={style.socialsMedias}>
                <span>
                    <a
                        href="https://github.com/Helya-Moradi"
                        target='_blank'
                        onMouseEnter={addPointer}
                        onMouseLeave={deletePointer}
                    >
                      <FontAwesomeIcon icon={faGithub} className={style.icon}/>
                    </a>
                </span>

                <span>
                    <a
                        href="https://www.linkedin.com/in/helya-moradi"
                        target='_blank'
                        onMouseEnter={addPointer}
                        onMouseLeave={deletePointer}
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} className={style.icon}/>
                    </a>
                </span>
            </div>
            <div className={style.copyright}>
                © {year} by <a href="#" onMouseEnter={addPointer} onMouseLeave={deletePointer}>Helya Moradi</a>, All
                rights reserved.
            </div>
        </div>
    );
}

export default Footer;