import style from './index.sass'
import Widget from "src/sections/main_content/components/widget";
import secureImg from 'src/assets/images/widgets/icon_secure.png';
import preciseImg from 'src/assets/images/widgets/icon_preciese.png';
import responsiveImg from 'src/assets/images/widgets/icon_responsive.png';
import zigzagImg from "src/assets/images/shapes/zigzag.png";

function Widgets() {
    return (
        <div className={style.widgetContainer}>
            <div className={style.widgets}>
                <Widget image={preciseImg} color='lightPurple' text='pixel precise'/>
                <Widget image={secureImg} color='pink' text='secure'/>
                <Widget image={responsiveImg} color='darkPurple' text='responsive'/>
            </div>

            <img src={zigzagImg} alt="" className={style.animatedShapes}/>
        </div>
    );
}

export default Widgets;