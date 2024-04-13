import style from './index.sass'
import {useEffect, useRef} from "react";
import triangleImg from "src/assets/images/shapes/triangle.png";

interface TriangleAnimationProps {
    left: number;
    top: number;
}

function TriangleAnimation({left, top}: TriangleAnimationProps) {
    const triangle = useRef();

    const spinning = [
            {
                left: `${left}rem`,
                top: `${top}rem`
            },
            {
                left: `${left + 4}rem`,
                top: `${top + 3}rem`
            },
            {
                left: `${left}rem`,
                top: `${top}rem`
            }
        ]
    ;

    const timing = {
        duration: 2000,
        iterations: Infinity
    }

    useEffect(() => {
        const element: any = triangle.current;

        if (element) {
            element.animate(spinning, timing)
        }
    }, [])

    return (
        <img src={triangleImg} alt="triangle" className={style.triangle} ref={triangle}
             style={{left: `${left}rem`, top: `${top}rem`}}/>
    );
}

export default TriangleAnimation;