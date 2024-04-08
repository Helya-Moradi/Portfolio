import Template from "src/sections/main_content/components/template";
import style from "./index.sass"
import Skill from "src/sections/main_content/components/skill";
import circleImg from "src/assets/images/shapes/circle.png";
import zigzagImg from 'src/assets/images/shapes/zigzag.png'

function Skills() {

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
        <div className={style.skillsContainer}>
            <Template title='Skills' color='lightPurple' direction='rtl'>
                <div className={style.skills}>
                    {
                        skills.map((skill,index) => (
                            <Skill key={`skill-${index}`} title={skill.title} percent={skill.percent}/>
                        ))
                    }
                </div>
            </Template>

            <img src={circleImg} alt="" className={style.circleAnimatedShapes}/>
            <img src={zigzagImg} alt="" className={style.zigzagAnimatedShapes}/>
        </div>
    );
}

export default Skills;