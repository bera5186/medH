import React, { createContext, useState } from "react";

export const UiContext = createContext()

export const Provider = (props) => {
    const [newDataModalState, setNewDataModalState] = useState('none');

    return (
        <UiContext.Provider value={[newDataModalState, setNewDataModalState]}>
            {
                props.children
            }
        </UiContext.Provider>
    )
}