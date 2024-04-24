import {Routes, Route, useLocation} from 'react-router-dom'
import style from './App.sass'
import Header from "./sections/header";
import MainContent from "./pages/main_content";
import Projects from "src/pages/projects";
import Footer from "src/sections/footer";
import Sidebar from "src/sections/sidebar";
import {useEffect, useRef, useState} from "react";
import NotFound from "src/pages/notfound";
import {PointerContextProvider} from "src/contexts/scroll";
import cls from "src/utils/class_names";

function App() {
    const {pathname} = useLocation();

    const [openMenu, setOpenMenu] = useState(false);
    const [activeItem, setActiveItem] = useState('');
    const [isPointer, setIsPointer] = useState(false);

    const cursorRef = useRef(null);
    const stalkerRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousemove', (e: any) => {
            const x = e.clientX;
            const y = e.clientY;

            // const cursorRect = cursorRef.current.getBoundingClientRect();
            // const stalkerRect = stalkerRef.current.getBoundingClientRect();
            //
            // cursorRef.current.style.transform = `translate(${x - (cursorRect.width / 2)}px,${y - (cursorRect.height / 2)}px)`;
            // stalkerRef.current.style.transform = `translate(${x - (stalkerRect.width / 2)}px,${y - (stalkerRect.height / 2)}px)`;

            cursorRef.current.style.transform = `translate(${x}px,${y}px)`;
            stalkerRef.current.style.transform = `translate(${x}px,${y}px)`;
        })
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        setOpenMenu(false);
    }, [pathname])

    return (
        <PointerContextProvider data={[isPointer, setIsPointer]}>
            <div className={style.app}>
                <div className={cls(style.cursor, isPointer && style.pointer)} ref={cursorRef}/>
                <div className={cls(style.stalker, isPointer && style.pointer)} ref={stalkerRef}/>

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
        </PointerContextProvider>
    );
}

export default App;