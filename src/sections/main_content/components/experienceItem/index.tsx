import style from './index.sass'
import {useState} from "react";
import cls from "src/utils/class_names";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
interface ExperienceItemProps {
    data: {
        title: String;
        date: String;
        location: String;
    };
}

function ExperienceItem({data}: ExperienceItemProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className={style.experienceItem}>
            <div className={style.title}>
                {data.title}
                {/*<FontAwesomeIcon icon="fa-solid fa-caret-down" />*/}
            </div>
            <div className={cls(style.collapseWrapper, open && style.open)}>
                <span className={style.date}>{data.date}</span>
                <div className={style.location}>{data.location}</div>
            </div>
        </div>
    );
}

export default ExperienceItem;