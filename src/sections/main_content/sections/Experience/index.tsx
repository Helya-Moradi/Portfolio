import Template from "src/sections/main_content/components/template";
import style from "./index.sass"
import ExperienceItem from "src/sections/main_content/components/experienceItem";
import CircleAnimation from "src/components/circleAnimation";

function Experience({observerRef}:any) {

    const experienceItems = [
        {
            title: 'Member of Computer Scientific Student\'s Community',
            date: 'DEC 2020 - DEC 2021',
            location: 'Ershad Damavand University'
        },
        {
            title: 'Content preparation for Computer Student\'s Magazine (Magit)',
            date: 'MAR 2021 - DEC 2021',
            location: 'Ershad Damavand University'
        },
        {
            title: 'Frontend Developer',
            date: 'JUN 2023 - Now',
            location: 'Hamresan'
        }
    ]

    return (
        <div className={style.experienceContainer} id='experience' ref={observerRef}>
            <Template title='Experience' color='second' direction='rtl'>
                <div className={style.experience}>
                    <p>
                        I started front-end development from December 2021.
                    </p>

                    <div className={style.experienceItems}>
                        {
                            experienceItems.map((item, index) => (
                                <ExperienceItem key={`experience-item-${index + 1}`} data={item}/>
                            ))
                        }
                    </div>
                </div>
            </Template>

            <CircleAnimation right={19} bottom={27}/>
        </div>

    );
}

export default Experience;