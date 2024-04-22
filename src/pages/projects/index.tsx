import style from './index.sass'
import ProjectItem from "src/pages/projects/components/projectItem";
import projectsData from "src/data/projects";

function Projects() {
    return (
        <div className={style.projectsPage}>
            {
                projectsData.map((project, index) => (
                    <ProjectItem key={`project_item_${index + 1}`} img={project.img} link={project.link}/>
                ))
            }
        </div>
    );
}

export default Projects