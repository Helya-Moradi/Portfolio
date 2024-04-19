import style from './index.sass'
import Widget from "src/sections/main_content/components/widget";
import ZigzagAnimation from "src/components/zigzagAnimation";
import starIcon from 'src/assets/icons/galaxy-star.svg'
import desktopIcon from 'src/assets/icons/devices.svg'
import secureIcon from 'src/assets/icons/shield-alt.svg'

function Widgets() {
    return (
        <div className={style.widgetContainer}>
            <div className={style.widgets}>
                <Widget icon={starIcon} color='third' text='pixel precise'/>
                <Widget icon={desktopIcon} color='first' text='secure'/>
                <Widget icon={secureIcon} color='second' text='responsive'/>
            </div>

            <ZigzagAnimation right={65} bottom={2}/>
        </div>
    );
}

export default Widgets;