import style from './index.sass'
import myImg from "src/assets/images/myImg.png"
import ZigzagAnimation from "src/components/zigzagAnimation";
import DottedCanvas from "src/components/dottedCanvas";

function Home({observerRef}: any) {
    return (<div className={style.home} id='home' ref={observerRef}>
        <div className={style.imageContainer}>
            {/*<DottedCanvas img={myImg}/>*/}
            <img src={myImg} alt="myImg" className={style.myImg}/>
        </div>

        <div className={style.introduce}>
                <span className={style.title}>
                    Hello <br/>I’m Helya Moradi
                </span>

            <span className={style.description}>
                    Self-motivated and creative web designer and front-end developer. Interested in learning, programming, web design, artwork and problem solving.
                </span>
        </div>

        <ZigzagAnimation right={-9} bottom={3}/>

    </div>);
}

export default Home;