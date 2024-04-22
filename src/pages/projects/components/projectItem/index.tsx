import style from './index.sass'

interface ProjectItemProps {
    img: string;
    link: string;
}

function ProjectItem({img, link}: ProjectItemProps) {
    return (
        <div className={style.projectItem}>
            <a href={link} className="project" target="_blank">
                <img src={img} alt="project-image"/>
            </a>
        </div>
    );
}

export default ProjectItem