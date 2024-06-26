import Template from "src/pages/main_content/components/template";
import style from "./index.sass"
import EducationItem from "src/pages/main_content/components/educationItem";
import TriangleAnimation from "src/components/triangleAnimation";

function Education({observerRef}:any) {

    const educations = [
        {
            date: '2014',
            degree: 'Diploma',
            filed: 'Mathematics',
            institute: 'Public Exemplary HighSchool'
        },
        {
            date: '2018',
            degree: 'Bachelor\'s Degree',
            filed: 'Computer Engineering',
            institute: 'Ershad damavand University',
            isLastItem: true
        },
    ]

    return (
        <div className={style.educationContainer} id='education' ref={observerRef}>
            <Template title='Education' color='first' direction='ltr'>
                <div className={style.education}>
                    {
                        educations.map((education, index) => (
                            <EducationItem
                                key={`educationItem-${index + 1}`}
                                date={education.date}
                                degree={education.degree}
                                field={education.filed}
                                institute={education.institute}
                                isLastItem={education.isLastItem || false}
                            />
                        ))
                    }
                </div>
            </Template>

            <TriangleAnimation left={3.5} top={17}/>

        </div>

    );
}

export default Education;