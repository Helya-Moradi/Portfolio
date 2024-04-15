import Header from "./sections/header";
import MainContent from "./sections/main_content";
import Footer from "src/sections/footer";
import Sidebar from "src/sections/sidebar";
import {useState} from "react";

function App() {
    const [openMenu, setOpenMenu] = useState(true);
    const [activeItem, setActiveItem] = useState('');

    return (
        <div>
            <Header open={openMenu} setOpen={setOpenMenu}/>
            <Sidebar open={openMenu} activeItem={activeItem}/>
            <MainContent activeItem={activeItem} setActiveItem={setActiveItem}/>
            <Footer/>
        </div>
    );
}

export default App;