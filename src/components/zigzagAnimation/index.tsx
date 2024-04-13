import style from './index.sass'
import zigzagImg from "src/assets/images/shapes/zigzag.png";
import {useEffect, useRef} from "react";

interface ZigzagAnimationProps {
    right: number;
    bottom: number;
}

function ZigzagAnimation({right, bottom}: ZigzagAnimationProps) {
    const zigzag = useRef();

    const spinning = [
        {right: `${right}rem`},
        {right: `${right + 4}rem`},
        {right: `${right}rem`}
    ];

    const timing = {
        duration: 2000,
        iterations: Infinity
    }

    useEffect(() => {
        const element: any = zigzag.current;

        if (element) {
            element.animate(spinning, timing)
        }
    }, [])

    return (
        <img src={zigzagImg} alt="zigzag" className={style.zigzag} ref={zigzag}
             style={{right: `${right}rem`, bottom: `${bottom}rem`}}/>
    );
}

export default ZigzagAnimation;