import {createRoot} from "react-dom/client";
import App from "./App";
import './index.sass';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const root = createRoot(document.getElementById('root'));
root.render(<App/>)