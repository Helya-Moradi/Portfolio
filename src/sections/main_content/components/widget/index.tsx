import style from "./index.sass"
import cls from "src/utils/class_names";

interface WidgetProps {
    image: string;
    color: 'pink' | 'darkPurple' | 'lightPurple';
    text: String;
}

function Widget({image, color, text}: WidgetProps) {
    return (
        <div className={cls(style.widget, style[color])}>
            <img src={image} alt="widget image"/>
            <span className={style.text}>
                {text}
            </span>
        </div>
    );
}

export default Widget;