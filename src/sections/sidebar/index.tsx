import style from './index.sass'
import cls from "src/utils/class_names";

interface SidebarProps {
    open: boolean;
    activeItem: string;
}

function Sidebar({open, activeItem}: SidebarProps) {
    const sidebarData = ['home', 'about', 'portfolio', 'skills', 'education', 'experience', 'contact'
    ];

    return (
        <div className={cls(style.sidebar, open && style.open)}>
            <ul className={style.list}>
                {
                    sidebarData.map((item, index) => (
                        <li key={`menu-item-${index + 1}`}>
                            <a href={`#${item}`} className={cls(activeItem === item && style.active)}>{item}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Sidebar;