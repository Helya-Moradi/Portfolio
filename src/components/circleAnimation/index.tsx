import style from './index.sass'
import {useEffect, useRef} from "react";
import circleImg from "src/assets/images/shapes/circle.png";

interface CircleAnimationProps {
    right: number;
    bottom: number;
}

function CircleAnimation({right, bottom}: CircleAnimationProps) {
    const circle = useRef();

    const spinning = [
        {
            bottom: `${bottom}rem`
        },
        {
            bottom: `${bottom + 4}rem`
        },
        {
            bottom: `${bottom}rem`
        }
    ];

    const timing = {
        duration: 2000,
        iterations: Infinity
    }

    useEffect(() => {
        const element: any = circle.current;

        if (element) {
            element.animate(spinning, timing)
        }
    }, [])

    return (
        <img src={circleImg} alt="circle" className={style.circle} ref={circle}
             style={{right: `${right}rem`, bottom: `${bottom}rem`}}/>
    );
}

export default CircleAnimation;