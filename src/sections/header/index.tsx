import style from './index.sass'
import cls from "src/utils/class_names";
import HamburgerMenu from "src/components/hamburgerMenu";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaintBrush} from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
    open: boolean;
    setOpen: Function
}

function Header({open, setOpen}: HeaderProps) {
    const changeThemeHandler = () => {
        const body = document.body;

        if (body.dataset.theme === 'light') {
            body.removeAttribute('data-theme');
            return
        }

        body.setAttribute('data-theme', 'light');
    }

    return (
        <header>
            <span className={style.logo}>Helya Moradi</span>

            <div className={style.wrapper}>
                <FontAwesomeIcon icon={faPaintBrush} className={style.icon} onClick={changeThemeHandler}/>
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