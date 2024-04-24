import style from "./index.sass";
import {usePointer} from "src/contexts/scroll";

interface ProjectProps {
    img: string;
    url: string
}

function Project({img, url}: ProjectProps) {
    const {addPointer, deletePointer} = usePointer();

    return (
        <div
            className={style.projectWrapper}
            onMouseEnter={addPointer}
            onMouseLeave={deletePointer}
        >
            <a href={url} target='_blank'>
                <img src={img} alt="project img"/>
                <span className={style.showMore}>
                    Show More
                </span>
            </a>
        </div>
    );
}

export default Project;