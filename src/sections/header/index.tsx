import style from './index.sass'
import cls from "src/utils/class_names";

interface HeaderProps {
    open: boolean;
    setOpen: Function
}

function Header({open, setOpen}: HeaderProps) {

    return (
        <header
            className={cls(open && style.open)}>

            <span className={style.logo}>Helya Moradi</span>

            <div
                className={style.hamburgerIcon}
                onClick={() => {
                    setOpen((prev: boolean) => !prev)
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
    );
}

export default Header;