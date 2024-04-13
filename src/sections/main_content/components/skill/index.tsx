import style from './index.sass'
import {useEffect, useRef} from "react";

interface SkillProps {
    title: String;
    percent: Number;
}

function Skill({title, percent}: SkillProps) {
    const range = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(style.rangeAnimation)
                }
            })
        });

        observer.observe(range.current)
    }, [])

    return (
        <div className={style.mainContainer}>
            <div className={style.rangeContainer}>
                <span className={style.range} ref={range} style={{width: `${percent}%`}}>
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