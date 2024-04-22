import {createRoot} from "react-dom/client";
import App from "./App";
import './index.sass';
import {HashRouter} from "react-router-dom";

const root = createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <App/>
    </HashRouter>
)