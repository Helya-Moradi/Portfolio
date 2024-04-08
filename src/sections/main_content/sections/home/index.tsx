import style from './index.sass'
import flowerImg from 'src/assets/images/flower.jpg'
import zigzagImg from 'src/assets/images/shapes/zigzag.png'

function Home() {
    return (<div className={style.home} id='home'>
        {/*TODO: change image*/}

        <div className={style.imageContainer}>
            <img src={flowerImg} alt="image"/>
        </div>

        <div className={style.introduce}>
                <span className={style.title}>
                    Hello <br/>I’m Helya Moradi
                </span>

                <span className={style.description}>
                    Self-motivated and creative Web Designer and Front-end Developer. Interested in learning, programming, web design, artwork and problem solving.
                </span>
        </div>

        <img src={zigzagImg} alt="" className={style.animatedShapes}/>

    </div>);
}

export default Home;