import style from "./index.sass";
import cls from "src/utils/class_names";
import {usePointer} from "src/contexts/scroll";

interface HamburgerMenuProps {
    open: boolean;
    setOpen: Function;
    classNames: string;
}

function HamburgerMenu({open, setOpen, classNames}: HamburgerMenuProps) {
    const {addPointer, deletePointer} = usePointer();

    return (<div
            onMouseEnter={addPointer}
            onMouseLeave={deletePointer}
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