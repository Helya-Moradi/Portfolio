import style from "./index.sass";
import cls from "src/utils/class_names";

interface HamburgerMenuProps {
    open: boolean;
    setOpen: Function;
    classNames: string;
}

function HamburgerMenu({open, setOpen, classNames}: HamburgerMenuProps) {
    return (<div
            className={cls(style.hamburgerIcon, open && style.open, classNames)}
            onClick={() => {
                setOpen((prev: boolean) => !prev)
            }}>
            <span className={cls(style.line, style.line1)}/>
            <span className={cls(style.line, style.line2)}/>
            <span className={cls(style.line, style.line3)}/>
        </div>

    );
}

export default HamburgerMenu;