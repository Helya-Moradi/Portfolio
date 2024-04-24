import style from './index.sass'
import cls from "src/utils/class_names";
import HamburgerMenu from "src/components/hamburgerMenu";
import {useEffect, useState} from "react";
import {usePointer} from "src/contexts/scroll";

interface HeaderProps {
    open: boolean;
    setOpen: Function
}

function Header({open, setOpen}: HeaderProps) {
    const [light, setLight] = useState(false);
    const {addPointer, deletePointer} = usePointer();

    useEffect(() => {
        const theme = localStorage.getItem('theme');

        if (theme === 'light') {
            setLight(true)
        } else {
            setLight(false)
        }
    }, []);
    useEffect(() => {
        const metaThemeColor = document.querySelector("meta[name=theme-color]");
        const body = document.body;

        if (light) {
            body.setAttribute('data-theme', 'light');
            metaThemeColor.setAttribute('content', '#188497')

            localStorage.setItem('theme', 'light')
        } else {
            body.removeAttribute('data-theme');
            metaThemeColor.setAttribute('content', '#605777')

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
                <div
                    className={cls(style.themeButton, !light && style.light)}
                    title={light ? 'Dark' : 'Light'}
                    onClick={changeThemeHandler}
                    onMouseEnter={addPointer}
                    onMouseLeave={deletePointer}
                />

                <HamburgerMenu open={open} setOpen={setOpen} classNames={style.hamburgerIcon}/>
            </div>

            <div className={style.socialMedias}>
                <a
                    href="https://www.linkedin.com/in/helya-moradi"
                    target='_blank'
                    onMouseEnter={addPointer}
                    onMouseLeave={deletePointer}>
                    li.
                </a>

                <a
                    href="https://github.com/Helya-Moradi"
                    target='_blank'
                    onMouseEnter={addPointer}
                    onMouseLeave={deletePointer}>
                    gh.
                </a>
            </div>
        </header>
    );
}

export default Header;