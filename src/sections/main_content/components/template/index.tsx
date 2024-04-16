import style from './index.sass'
import cls from "src/utils/class_names";

interface TemplateProps {
    color: 'first' | 'second' | 'third';
    direction: 'ltr' | 'rtl';
    title: String;
    children?: any;
}

function Template({color, direction, title, children}: TemplateProps) {
    return (
        <div className={cls(style.template, style[color], style[direction])}>

            <div className={style.titleContainer}>
                <h2 className={style.title}>
                    {title}
                </h2>
            </div>

            <div className={style.childrenContainer}>
                {children}
            </div>

        </div>
    );
}

export default Template;