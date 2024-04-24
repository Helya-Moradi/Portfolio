import style from './index.sass'
import {Link} from "react-router-dom";
import {usePointer} from "src/contexts/scroll";

function NotFound() {
    const {addPointer, deletePointer} = usePointer();

    return (
        <div className={style.notFoundPage}>
            <h3>Ooops!</h3>
            <p>The page you were looking for could not found.</p>
            <span>404</span>
            <p className={style.tryAgain}>
                Try to start from <Link to='/' onMouseEnter={addPointer} onMouseLeave={deletePointer}>Home</Link> page.
            </p>
        </div>
    );
}

export default NotFound;