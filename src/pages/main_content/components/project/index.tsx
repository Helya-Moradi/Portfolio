import style from "./index.sass";

interface ProjectProps {
    img: string;
    url: string
}

function Project({img, url}: ProjectProps) {
    return (
        <div className={style.projectWrapper}>
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