import {createContext, useContext} from "react";

const PointerContext = createContext(null as any);

export function PointerContextProvider({data, children}) {
    return <PointerContext.Provider value={data}>{children}</PointerContext.Provider>
}

export function usePointer() {
    const [isPointer, setIsPointer] = useContext(PointerContext);

    const addPointer = () => {
        setIsPointer(true);
    }

    const deletePointer = () => {
        setIsPointer(false);
    }

    return {
        isPointer,
        addPointer,
        deletePointer
    }
}

export default PointerContext;