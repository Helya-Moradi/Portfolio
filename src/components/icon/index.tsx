import cls from "src/utils/class_names";
import style from './index.sass'

interface IconProps {
    icon: any;
    classNameIcon: string;
    classNameBg: string;
}

function Icon({icon, classNameIcon, classNameBg}: IconProps) {
    return (
        <div className={cls(style.iconWrapper, classNameIcon)}>
            <img src={icon} alt='svg' className={style.fontawesome}/>
            <div className={cls(style.bg, classNameBg)}/>
        </div>
    );
}

export default Icon;