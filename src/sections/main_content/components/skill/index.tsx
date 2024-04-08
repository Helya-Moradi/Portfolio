import style from './index.sass'

interface SkillProps {
    title: String;
    percent: Number;
}

function Skill({title, percent}: SkillProps) {
    return (
        <div className={style.mainContainer}>
            <div className={style.rangeContainer}>
                <span className={style.range} style={{width:`${percent}%`}}>
                    {title}
                </span>
            </div>

            <span className={style.percent}>
                {percent.toString()}%
            </span>
        </div>
    );
}

export default Skill