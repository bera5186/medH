import React, { useState } from 'react';
import { useAsyncDebounce } from "react-table";

const Filter = ({ filter, setFilter }) => {

    const [value, setValue] = useState(filter)

    const onChange = useAsyncDebounce((value) => {
        setFilter(value || undefined)
    }, 400)

    return (
        <div>
            Search: { ' ' }
            <input type="text" value={ value || ''} onChange={e => {
                setValue(e.target.value)
                onChange(e.target.value)
            }}/>
        </div>
    )
}

export default Filter;
