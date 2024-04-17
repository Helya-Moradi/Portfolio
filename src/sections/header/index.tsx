import style from './index.sass'
import cls from "src/utils/class_names";
import HamburgerMenu from "src/components/hamburgerMenu";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaintBrush} from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState} from "react";

interface HeaderProps {
    open: boolean;
    setOpen: Function
}

function Header({open, setOpen}: HeaderProps) {
    const [light, setLight] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');

        if (theme === 'light') {
            setLight(true)
        } else {
            setLight(false)
        }
    }, []);

    useEffect(() => {
        const body = document.body;

        if (light) {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light')
        } else {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark')
        }

    }, [light])

    const changeThemeHandler = () => {
        setLight(prev => !prev)
    }

    return (
        <header className={cls(open && style.open)}>
            <span className={style.logo}>Helya Moradi</span>

            <div className={style.wrapper}>
                <FontAwesomeIcon icon={faPaintBrush} className={style.icon} onClick={changeThemeHandler}/>
                <HamburgerMenu open={open} setOpen={setOpen} classNames={style.hamburgerIcon}/>
            </div>

            <div className={style.socialMedias}>
                <a href="https://www.linkedin.com/in/helya-moradi" target='_blank'>li.</a>
                <a href="https://github.com/Helya-Moradi" target='_blank'>gh.</a>
            </div>
        </header>
    );
}

export default Header;