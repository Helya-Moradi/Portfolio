import {Fragment, useEffect, useRef} from "react";
import style from './index.sass'
import Home from "./sections/home";
import About from "src/pages/main_content/sections/about";
import Portfolio from "src/pages/main_content/sections/portfolio";
import Skills from "src/pages/main_content/sections/skills";
import Education from "src/pages/main_content/sections/Education";
import Experience from "src/pages/main_content/sections/Experience";
import Contact from "src/pages/main_content/sections/contact";
import Widgets from "src/pages/main_content/sections/widgets";

interface MainContentPops {
    activeItem: string;
    setActiveItem: (activeItem: string) => void;
}

function MainContent({activeItem, setActiveItem}: MainContentPops) {
    const observerRef = useRef([]);

    const observerHandler = (entries: any[]) => {
        entries.forEach(entry => {
            if (entry.target.id !== activeItem && entry.isIntersecting) {
                setActiveItem(entry.target.id);
            }
        })
    }

    const options = {
        threshold: 0.5
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observerHandler, options);

        observerRef.current.forEach(ref => {
            observer.observe(ref);
        })
    }, []);

    const componentsArray = [Home, About, Portfolio, Skills, Education, Experience, Contact];

    return (
        <div className={style.mainContentPage}>
            {
                componentsArray.map((CMP, index) => (
                    <Fragment key={`section-${index + 1}`}>
                        <CMP observerRef={(el: HTMLElement) => (observerRef.current[index] = el)}/>
                        {
                            CMP === Skills && <Widgets/>
                        }
                    </Fragment>
                ))
            }
        </div>
    );
}

export default MainContent;