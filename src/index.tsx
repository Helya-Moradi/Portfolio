import {createRoot} from "react-dom/client";
import './theme/colors.sass';
import App from "./App";
import './index.sass';

const root = createRoot(document.getElementById('root'));
root.render(<App/>)