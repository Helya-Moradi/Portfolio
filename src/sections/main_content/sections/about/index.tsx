import Template from "src/sections/main_content/components/template";
import style from './index.sass'
import downloadImg from 'src/assets/images/download/icon_download_cv.png'

function About() {
    return (
        <Template color='pink' title='About' direction='ltr'>
            <div className={style.about}>

                <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugit harum nihil
                </h3>

                <p>
                    Self-motivated and creative Web Designer and Front-end Developer. Interested in learning,
                    programming, web design, artwork and problem solving.
                </p>

                <div className={style.aboutContainer}>

                    <ul className={style.list}>
                        <li>
                            <span className={style.label}>Name:</span>
                            <span className={style.value}>Helya Moradi</span>
                        </li>
                        <li>
                            <span className={style.label}>City:</span>
                            <span className={style.value}>Tehran</span>
                        </li>
                        <li>
                            <span className={style.label}>Birthday:</span>
                            <span className={style.value}>27. 12. 1999</span>
                        </li>
                        <li>
                            <span className={style.label}>Email:</span>
                            <span className={style.value}>helya.m78@gmail.com</span>
                        </li>
                        <li>
                            <span className={style.label}>Website:</span>
                            <span className={style.value}>www.sitelink.com</span>
                        </li>
                    </ul>

                    <div className={style.downloadCvContainer}>
                        <a href="">
                            <img src={downloadImg} alt="download cv image"/>
                            <span className={style.downloadCv}>Download cv</span></a>
                    </div>

                </div>

            </div>
        </Template>
    );
}

export default About;