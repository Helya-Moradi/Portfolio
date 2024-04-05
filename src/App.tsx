import Header from "./components/header";
import {useState} from "react";
import MainContent from "./components/main_content";

function App() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div>
            <Header open={openMenu} setOpen={setOpenMenu}/>
            <MainContent/>
        </div>
    );
}

export default App;