import style from './index.sass'
import Widget from "src/sections/main_content/components/widget";
import ZigzagAnimation from "src/components/zigzagAnimation";
import {ReactComponent as StarIcon} from 'src/assets/icons/galaxy-star.svg'
import {ReactComponent as DesktopIcon} from 'src/assets/icons/devices.svg'
import {ReactComponent as SecureIcon} from 'src/assets/icons/shield-alt.svg'

function Widgets() {
    return (
        <div className={style.widgetContainer}>
            <div className={style.widgets}>
                <Widget icon={StarIcon} color='third' text='pixel precise'/>
                <Widget icon={DesktopIcon} color='first' text='secure'/>
                <Widget icon={SecureIcon} color='second' text='responsive'/>
            </div>

            <ZigzagAnimation right={65} bottom={2}/>
        </div>
    );
}

export default Widgets;