import style from './index.sass'
import ProjectItem from "src/pages/projects/components/projectItem";
import projectsData from "src/data/projects";
import {useEffect, useRef, useState} from "react";

function Projects() {
    const [hoverData, setHoverData]: any = useState({});
    const [isHover, setIsHover] = useState(false);
    const hoverDim = useRef(null);
    const projectPage = useRef(null);

    const mouseEnterHandler = async (e) => {
        const currentProjectBound = e.currentTarget.getBoundingClientRect();
        setHoverData(currentProjectBound)
        addHover();
    }

    const mouseLeaveHandler = () => {
        setHoverData({});
        deleteHover();
    }

    const addHover = () => {
        setIsHover(true);
    }

    const deleteHover = () => {
        setIsHover(false);
    }

    useEffect(() => {
        const dim = hoverDim.current;

        if (isHover) {
            const marginLeft = projectPage.current.getBoundingClientRect().x;
            const scrollY = window.scrollY;

            dim.style.top = `${hoverData.y + scrollY}px`;
            dim.style.left = `${hoverData.x - marginLeft}px`;
            dim.style.width = `${hoverData.width - 50}px`;
            dim.style.height = `${hoverData.height - 50}px`;

            dim.classList.add(style.hover)

        } else {
            dim.classList.remove(style.hover)
        }
    }, [hoverData])

    return (
        <div className={style.projectsPage} ref={projectPage}>
            {
                projectsData.map((project, index) => (
                    <ProjectItem
                        key={`project_item_${index + 1}`}
                        img={project.img} link={project.link}
                        description={project.description}
                        onEnter={mouseEnterHandler}
                        onLeave={mouseLeaveHandler}
                    />
                ))
            }

            <span className={style.hoverDim}
                  ref={hoverDim}
                  onMouseEnter={addHover}
                  onMouseMove={addHover}
                  onMouseLeave={deleteHover}
            />
        </div>
    );
}

export default Projects