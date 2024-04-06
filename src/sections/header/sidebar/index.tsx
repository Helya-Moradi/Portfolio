import React from 'react';
import style from './index.sass'
import cls from "../../../utils/class_names";

function Sidebar({open}) {
    return (
        <div className={cls(style.sidebar, open && style.open)}>
            <ul className={style.list}>
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                    <a href="#About">About</a>
                </li>
                <li>
                    <a href="#Portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#Skills">Skills</a>
                </li>
                <li>
                    <a href="#Education">Education</a>
                </li>
                <li>
                    <a href="#Experience">Experience</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;