import style from './index.sass'
import {useState} from "react";
import cls from "src/utils/class_names";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

interface ExperienceItemProps {
    data: {
        title: String;
        date: String;
        location: String;
    };
}

function ExperienceItem({data}: ExperienceItemProps) {
    const [open, setOpen] = useState(false);

    const openCollapseHandler = () => {
        setOpen(prev => !prev)
    }

    return (
        <div className={cls(style.experienceItem, open && style.open)}>
            <div className={style.titleContainer} onClick={openCollapseHandler}>
                <span className={style.title}>
                  {data.title}
                </span>
                <FontAwesomeIcon icon={faCaretDown} className={style.icon}/>
            </div>
            <div className={style.collapseWrapper}>
                <div className={style.collapseContent}>
                    <span className={style.date}>{data.date}</span>
                    <div className={style.location}>{data.location}</div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceItem;