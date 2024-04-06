import React from 'react';
import style from './index.sass'
import cls from "../../utils/class_names";

function Header({open, setOpen}) {
    return (
        <header
            className={cls(open && style.open)}>

            <span className={style.logo}>Helya Moradi</span>

            <div
                className={style.hamburgerIcon}
                onClick={() => {
                    setOpen(prev => !prev)
                }}>
                <span className={cls(style.line, style.line1)}/>
                <span className={cls(style.line, style.line2)}/>
                <span className={cls(style.line, style.line3)}/>
            </div>

            <div className={style.socialMedias}>
                <a href="https://www.linkedin.com/in/helya-moradi">li.</a>
                <a href="https://github.com/Helya-Moradi">gh.</a>
            </div>

        </header>
    );
}

export default Header;