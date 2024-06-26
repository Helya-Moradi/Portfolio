import Template from "src/pages/main_content/components/template";
import style from "./index.sass"
import Skill from "src/pages/main_content/components/skill";
import ZigzagAnimation from "src/components/zigzagAnimation";
import CircleAnimation from "src/components/circleAnimation";

function Skills({observerRef}:any) {

    const skills = [
        {title: 'html5', percent: 95},
        {title: 'css', percent: 80},
        {title: 'javascript', percent: 75},
        {title: 'typescript', percent: 80},
        {title: 'react', percent: 90},
        {title: 'sass/scss', percent: 90},
        {title: 'bootstrap4', percent: 60},
        {title: 'graphql,rest api', percent: 70},
        {title: 'webpack', percent: 50},
        {title: 'git,github', percent: 75},
        {title: 'figma', percent: 50}
    ]

    return (
        <div className={style.skillsContainer} id='skills' ref={observerRef}>
            <Template title='Skills' color='third' direction='rtl'>
                <div className={style.skills}>
                    {
                        skills.map((skill, index) => (
                            <Skill key={`skill-${index + 1}`} title={skill.title} percent={skill.percent}/>
                        ))
                    }
                </div>
            </Template>

            <CircleAnimation right={-5} bottom={6}/>
            <ZigzagAnimation right={45} bottom={2}/>
        </div>
    );
}

export default Skills;