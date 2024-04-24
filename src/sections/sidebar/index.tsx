import style from './index.sass'
import cls from "src/utils/class_names";
import {HashLink} from 'react-router-hash-link'
import {usePointer} from "src/contexts/scroll";
import {useEffect, useRef} from "react";

interface SidebarProps {
    open: boolean;
    activeItem: string;
    prevActiveItem: string;
}

function Sidebar({open, activeItem, prevActiveItem}: SidebarProps) {
    const {addPointer, deletePointer} = usePointer();
    const lineRef = useRef(null);

    const sidebarData = ['home', 'about', 'portfolio', 'skills', 'education', 'experience', 'contact'];
    const line = lineRef.current;
    let position = 0, width = 0;
    let prevActiveElement = null;


    useEffect(() => {
        const activeItemElement = document.querySelector(`[data-name="${activeItem}"]`);

        console.log(activeItemElement)
        if (activeItemElement) {
            const activeItemElementRect = activeItemElement.getBoundingClientRect();


            position = activeItemElementRect.left;
            width = activeItemElementRect.width;

            line.style.left = `${position - 32}px`
            line.style.width = `${width}px`
        }

        // if(clickedItem){
        //     const clickedItemRect = clickedItem.getBoundingClientRect();
        //
        //     let newPosition = clickedItemRect.left;
        //     let newWidth = clickedItemRect.width;
        //
        //     const newspaperSpinning = [
        //         {width: `${((newPosition - position) + newWidth)}px`},
        //         {
        //             width: `${newWidth}px`,
        //             left: `${newPosition}px`
        //         }
        //     ];
        //
        //     const newspaperTiming = {
        //         duration: 2000,
        //         iterations: 1,
        //     };
        //
        //     if (newPosition >= position) {
        //         line.animate(newspaperSpinning, newspaperTiming);
        //     } else {
        //
        //     }
        // }

    }, [activeItem]);

    return (
        <div className={cls(style.sidebar, !open && style.open)}>
            <ul className={style.list}>
                {
                    sidebarData.map((item, index) => (
                        <li
                            key={`menu-item-${index + 1}`}
                            data-name={item}
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
                <div className={style.line} ref={lineRef}/>
            </ul>
        </div>
    );
}

export default Sidebar;