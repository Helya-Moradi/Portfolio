import {Routes, Route} from 'react-router-dom'
import style from './App.sass'
import Header from "./sections/header";
import MainContent from "./pages/main_content";
import Projects from "src/pages/projects";
import Footer from "src/sections/footer";
import Sidebar from "src/sections/sidebar";
import {useEffect, useRef, useState} from "react";
import NotFound from "src/pages/notfound";

function App() {
    const [openMenu, setOpenMenu] = useState(false);
    const [activeItem, setActiveItem] = useState('');

    const cursorRef = useRef(null);
    const stalkerRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;

            cursorRef.current.style.transform = `translate(${x}px,${y}px)`;
            stalkerRef.current.style.transform = `translate(${x}px,${y}px)`;
        })
    });

    return (
        <div className={style.app}>
            <div className={style.cursor} ref={cursorRef}/>
            <div className={style.stalker} ref={stalkerRef}/>

            <Header open={openMenu} setOpen={setOpenMenu}/>
            <Sidebar open={openMenu} activeItem={activeItem}/>

            <Routes>
                <Route
                    path='/'
                    element={<MainContent activeItem={activeItem} setActiveItem={setActiveItem}/>}
                />

                <Route path='/projects' element={<Projects/>}/>

                <Route path='/*' element={<NotFound/>}/>
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;