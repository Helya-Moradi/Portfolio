import React from 'react';
import style from './index.sass'
import cls from "src/utils/class_names";

interface TemplateProps {
    color: 'pink' | 'darkPurple' | 'lightPurple';
    title: String;
    children?: any;
}

function Template({color, title, children}: TemplateProps) {
    return (
        <div className={cls(style.template, style[color])}>

            <div className={style.titleContainer}>
                <span className={style.title}>
                    {title}
                </span>
            </div>

            <div className={style.childrenContainer}>
                {children}
            </div>

        </div>
    );
}

export default Template;