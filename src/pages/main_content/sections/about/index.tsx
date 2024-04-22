import Template from "src/pages/main_content/components/template";
import style from './index.sass'
import cv from 'src/assets/files/HelyaMoradiCV.pdf'
import Icon from "src/components/icon";
import {ReactComponent as DownloadIcon} from 'src/assets/icons/file-download.svg'

function About({observerRef}: any) {
    return (
        <div ref={observerRef} id='about'>
            <Template color='first' title='About' direction='ltr'>
                <div className={style.about}>

                    <h3>
                        I am a front-end developer from Iran.
                    </h3>

                    <p>
                        Self-motivated and creative web designer and front-end developer. Interested in learning,
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
                            <a href={cv} download="HelyaMoradiCV.pdf" target='-blank'>
                                <Icon IconSvg={DownloadIcon} classNameIcon={style.icon} classNameBg={style.bg}/>
                                <span className={style.downloadCv}>Download cv</span>
                            </a>
                        </div>

                    </div>

                </div>
            </Template>
        </div>
    );
}

export default About;