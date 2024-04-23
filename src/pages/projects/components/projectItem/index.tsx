import style from './index.sass'
import {MouseEventHandler} from "react";

interface ProjectItemProps {
    img: string;
    link: string;
    description: string;
    onEnter: MouseEventHandler<HTMLDivElement>;
    onLeave: MouseEventHandler<HTMLDivElement>;
}

function ProjectItem({img, link, description, onEnter, onLeave}: ProjectItemProps) {
    return (
        <div className={style.projectItem} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <a href={link} target="_blank">
                <img src={img} alt="project-image"/>
                <span>{description}</span>
            </a>
        </div>
    );
}

export default ProjectItem