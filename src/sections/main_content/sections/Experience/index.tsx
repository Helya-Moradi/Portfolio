import Template from "src/sections/main_content/components/template";
import style from "./index.sass"
import ExperienceItem from "src/sections/main_content/components/experienceItem";
import circleImg from "src/assets/images/shapes/circle.png";

function Experience() {

    const experienceItems = [
        {
            title: 'Content preparation for Computer Student\'s Magazine (Magit)',
            date: 'MAR 2021 - DEC 2021',
            location: 'Ershad Damavand University'
        },
        {
            title: 'Member of Computer Scientific Student\'s Community',
            date: 'DEC 2020 - DEC 2021',
            location: 'Ershad Damavand University'
        },
        {
            title: 'Frontend Developer',
            date: 'JUN 2023 - Now',
            location: 'Hamresan'
        }
    ]

    return (
        <div className={style.experienceContainer}>
            <Template title='Experience' color='darkPurple' direction='rtl'>
                <div className={style.experience}>
                    {
                        experienceItems.map((item, index) => (
                            <ExperienceItem key={`experience-item-${index + 1}`} data={item}/>
                        ))
                    }
                </div>
            </Template>

            <img src={circleImg} alt="" className={style.animatedShapes}/>
        </div>

    );
}

export default Experience;