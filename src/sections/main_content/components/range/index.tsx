import React from 'react';
import style from './index.sass'

interface RangeProps {
    title: String;
    percent: Number;
}

function Range({title, percent}: RangeProps) {
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

export default Range