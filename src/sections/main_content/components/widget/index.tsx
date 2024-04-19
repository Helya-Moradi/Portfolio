import style from "./index.sass"
import cls from "src/utils/class_names";
import Icon from "src/components/icon";

interface WidgetProps {
    icon: any;
    color: 'first' | 'second' | 'third';
    text: String;
}

function Widget({icon, color, text}: WidgetProps) {
    return (
        <div className={cls(style.widget, style[color])}>
            <Icon icon={icon} classNameIcon={style.icon} classNameBg={style.bg}/>
            <span className={style.text}>
                {text}
            </span>
        </div>
    );
}

export default Widget;