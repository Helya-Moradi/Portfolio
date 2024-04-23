import style from './index.sass'

interface ProjectItemProps {
    img: string;
    link: string;
    description: string;
}

function ProjectItem({img, link, description}: ProjectItemProps) {
    return (
        <div className={style.projectItem}>
            <a href={link} className="project" target="_blank">
                <img src={img} alt="project-image"/>
                <span>{description}</span>
            </a>
        </div>
    );
}

export default ProjectItem