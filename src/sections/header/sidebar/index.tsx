import style from './index.sass'
import cls from "src/utils/class_names";

interface SidebarProps {
    open: Boolean;
}

function Sidebar({open}: SidebarProps) {
    return (
        // TODO: handle active menu
        <div className={cls(style.sidebar, open && style.open)}>
            <ul className={style.list}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;