import { DatePicker, Input, Select } from 'antd';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import classes from './filter.module.css'

function SearchAndFilter({ query, setQuery }) {


    const hand = value => {
        console.log(value)

    }

    return (
        <div
            className={classes.flex_container}
        >
            <Input
                className={classes.searchbar}
                value={query}
                onChange={e => setQuery(e.target.value)}
                size="medium" placeholder="Search documents" prefix={<CiSearch size={20} />} />
            <div
                className={classes.res_flex_div}
                style={{ gap: 10 }}
            >
                <DatePicker
                    onChange={hand}
                />
            </div>
        </div>
    )
}

export default SearchAndFilter
