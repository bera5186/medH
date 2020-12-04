import React, { createContext, useState } from "react";

export const StateContext = createContext()

export const StateProvider = (props) => {
    const [hash, setHash] = useState("")
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [tableData, setTableData] = useState([])

    return (
        <StateContext.Provider value={{
            fileHash: [hash, setHash],
            fileName: [name, setName],
            fileDesc: [desc, setDesc],
            tableData: [tableData, setTableData]
        }}>
            {
                props.children
            }
        </StateContext.Provider>
    )
}