import style from './index.sass'
import iImg from 'src/assets/images/i.png'
import ZigzagAnimation from "src/components/zigzagAnimation";

function Home({observerRef}: any) {
    return (<div className={style.home} id='home' ref={observerRef}>
        {/*TODO: change image*/}

        <div className={style.imageContainer}>
            <img src={iImg} alt="image"/>
        </div>

        <div className={style.introduce}>
                <span className={style.title}>
                    Hello <br/>I’m Helya Moradi
                </span>

            <span className={style.description}>
                    Self-motivated and creative Web Designer and Front-end Developer. Interested in learning, programming, web design, artwork and problem solving.
                </span>
        </div>

        <ZigzagAnimation right={-9} bottom={3}/>

    </div>);
}

export default Home;