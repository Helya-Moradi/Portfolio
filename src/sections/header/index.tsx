import {useState} from 'react';
import style from './index.sass'
import cls from "src/utils/class_names";
import Sidebar from "./sidebar";

function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <header
                className={cls(openMenu && style.open)}>

                <span className={style.logo}>Helya Moradi</span>

                <div
                    className={style.hamburgerIcon}
                    onClick={() => {
                        setOpenMenu(prev => !prev)
                    }}>
                    <span className={cls(style.line, style.line1)}/>
                    <span className={cls(style.line, style.line2)}/>
                    <span className={cls(style.line, style.line3)}/>
                </div>

                <div className={style.socialMedias}>
                    <a href="https://www.linkedin.com/in/helya-moradi" target='_blank'>li.</a>
                    <a href="https://github.com/Helya-Moradi" target='_blank'>gh.</a>
                </div>

            </header>

            <Sidebar open={openMenu}/>
        </>
    );
}

export default Header;