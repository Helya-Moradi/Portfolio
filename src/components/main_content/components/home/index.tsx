import React from 'react';
import style from './index.sass'
import zigzagImg from '../../../../assets/images/zigzag.png'

function Home() {
    return (<div className={style.home}>
        {/*TODO: add image*/}

        <div className={style.imageContainer}>
            {/*<img src="" alt=""/>*/}
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