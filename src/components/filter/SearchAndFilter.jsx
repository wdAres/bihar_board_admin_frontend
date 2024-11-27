import { DatePicker, Input, Select } from 'antd';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import classes from './filter.module.css'
import moment from 'moment';

function SearchAndFilter({ query, setQuery, date, setDate }) {


    const hand = e => {
        const d = e.target.value;
        let newDate = moment(d).format('YYYY-MM-DD')
        console.log(newDate)
        if (newDate !=='Invalid date') {
            setDate(newDate)
            return ;
        }
        else setDate('')
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
                <Input type='date' onChange={hand} />
                {/* <DatePicker
                    onChange={hand}
                /> */}

            </div>
        </div>
    )
}


export default SearchAndFilter
