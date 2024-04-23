import style from './index.sass'
import cls from "src/utils/class_names";
import {HashLink} from 'react-router-hash-link'

interface SidebarProps {
    open: boolean;
    activeItem: string;
}

function Sidebar({open, activeItem}: SidebarProps) {
    const sidebarData = ['home', 'about', 'portfolio', 'skills', 'education', 'experience', 'contact'];

    return (
        <div className={cls(style.sidebar, open && style.open)}>
            <ul className={style.list}>
                {
                    sidebarData.map((item, index) => (
                        <li key={`menu-item-${index + 1}`}>
                            <HashLink to={`/#${item}`}
                                      className={cls(activeItem === item && style.active)}>{item}
                            </HashLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Sidebar;