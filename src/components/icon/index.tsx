import cls from "src/utils/class_names";
import style from './index.sass';

interface IconProps {
    IconSvg: any;
    classNameIcon: string;
    classNameBg: string;
}

function Icon({IconSvg, classNameIcon, classNameBg}: IconProps) {
    return (
        <div className={style.iconWrapper}>
            <IconSvg className={cls(style.fontawesome, classNameIcon)}/>
            <div className={cls(style.bg, classNameBg)}/>
        </div>
    );
}

export default Icon;