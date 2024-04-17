import style from './index.sass'
import Widget from "src/sections/main_content/components/widget";
import secureImg from 'src/assets/images/widgets/icon_secure.png';
import preciseImg from 'src/assets/images/widgets/icon_preciese.png';
import responsiveImg from 'src/assets/images/widgets/icon_responsive.png';
import ZigzagAnimation from "src/components/zigzagAnimation";

function Widgets() {
    return (
        <div className={style.widgetContainer}>
            <div className={style.widgets}>
                <Widget image={preciseImg} color='third' text='pixel precise'/>
                <Widget image={secureImg} color='first' text='secure'/>
                <Widget image={responsiveImg} color='second' text='responsive'/>
            </div>

            <ZigzagAnimation right={65} bottom={2}/>
        </div>
    );
}

export default Widgets;