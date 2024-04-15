import style from './index.sass'
import cls from "src/utils/class_names";
import HamburgerMenu from "src/components/hamburgerMenu";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEarth} from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
    open: boolean;
    setOpen: Function
}

function Header({open, setOpen}: HeaderProps) {

    return (
        <header>
            <span className={style.logo}>Helya Moradi</span>

            <div className={style.wrapper}>
                <FontAwesomeIcon icon={faEarth} className={style.icon}/>
                <HamburgerMenu open={open} setOpen={setOpen} classNames={style.hamburgerIcon}/>
            </div>

            <div className={cls(style.socialMedias, open && style.open)}>
                <a href="https://www.linkedin.com/in/helya-moradi" target='_blank'>li.</a>
                <a href="https://github.com/Helya-Moradi" target='_blank'>gh.</a>
            </div>
        </header>
    );
}

export default Header;