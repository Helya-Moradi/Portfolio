import style from './index.sass'
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className={style.notFoundPage}>
            <h3>Ooops!</h3>
            <p>The page you were looking for could not found.</p>
            <span>404</span>
            <p className={style.tryAgain}>
                Try to start from <Link to='/'>Home</Link> page.
            </p>
        </div>
    );
}

export default NotFound;