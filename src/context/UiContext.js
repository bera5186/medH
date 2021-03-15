import React, { createContext, useState } from "react";

export const UiContext = createContext()

export const UiProvider = (props) => {
    const [newDataModalState, setNewDataModalState] = useState('none');
    const [searchModalState, setSearchModalState] = useState('none')
    const [loading, setLoading] = useState(false)

    return (
        <UiContext.Provider value={{
            modal: [newDataModalState, setNewDataModalState],
            loading: [loading, setLoading],
            searchModal: [searchModalState, setSearchModalState]
        }}>
            {
                props.children
            }
        </UiContext.Provider>
    )
}