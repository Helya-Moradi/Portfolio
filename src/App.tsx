import Header from "./components/header";
import {useState} from "react";

function App() {
    const [openMenu, setopenMenu] = useState(false);

    return (
        <div>
            <Header open={openMenu} setOpen={setopenMenu}/>
        </div>
    );
}

export default App;