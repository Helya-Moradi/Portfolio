import style from "./index.sass"
import cls from "src/utils/class_names";

interface EducationProps {
    date: String;
    degree: String;
    field: String;
    institute: String;
    isLastItem?: Boolean;
}

function EducationItem({date, degree, field, institute, isLastItem = false}: EducationProps) {
    return (
        <div className={cls(style.educationWrapper, isLastItem && style.lastItem)}>
            <div className={style.date}>{date}</div>
            <span className={style.circle}/>
            <div className={style.descriptionWrapper}>
                <div className={style.degree}>{degree}</div>
                <div className={style.field}>
                    {field}
                </div>
                <div className={style.institute}>
                    {institute}
                </div>
            </div>
        </div>
    )
}

export default EducationItem;