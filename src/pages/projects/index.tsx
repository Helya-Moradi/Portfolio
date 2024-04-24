import style from './index.sass'
import ProjectItem from "src/pages/projects/components/projectItem";
import projectsData from "src/data/projects";
import {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {usePointer} from "src/contexts/scroll";

function Projects() {
    const {addPointer, deletePointer} = usePointer();
    const [hoverData, setHoverData]: any = useState({});
    const [isHover, setIsHover] = useState(false);
    const hoverDim = useRef(null);
    const projectPage = useRef(null);

    const mouseEnterHandler = (e) => {
        const currentProjectBound = e.currentTarget.getBoundingClientRect();
        setHoverData(currentProjectBound);
        addPointer();
        addHover();
    }

    const mouseLeaveHandler = () => {
        setHoverData({});
        deletePointer();
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
            <Link
                to='/'
                className={style.backWrapper}
                onMouseEnter={addPointer}
                onMouseLeave={deletePointer}
            >
                <FontAwesomeIcon icon={faArrowLeft} className={style.icon}/>
                <span>Back To Home</span>
            </Link>

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
    )
        ;
}

export default Projects