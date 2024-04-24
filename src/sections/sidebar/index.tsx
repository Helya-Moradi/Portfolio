import style from './index.sass'
import cls from "src/utils/class_names";
import {HashLink} from 'react-router-hash-link'
import {usePointer} from "src/contexts/scroll";
import {useEffect, useRef} from "react";

interface SidebarProps {
    open: boolean;
    activeItem: string;
}

function Sidebar({open, activeItem}: SidebarProps) {
    const {addPointer, deletePointer} = usePointer();
    const sidebarData = ['home', 'about', 'portfolio', 'skills', 'education', 'experience', 'contact'];

    return (
        <div className={cls(style.sidebar, open && style.open)}>
            <ul className={style.list}>
                {
                    sidebarData.map((item, index) => (
                        <li
                            key={`menu-item -${index + 1}`}
                            onMouseEnter={addPointer}
                            onMouseLeave={deletePointer}
                        >
                            <HashLink
                                to={`/#${item}`}
                                className={cls(activeItem === item && style.active)}
                            >
                                {item}
                            </HashLink>
                        </li>
                    ))
                }
                <div className={style.line}/>
            </ul>
        </div>
    );
}

export default Sidebar;