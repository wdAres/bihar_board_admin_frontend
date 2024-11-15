import React from 'react'
import classes from './Inputs.module.css'
import { Flex, Input, Select } from 'antd'

const onSearch = (value) => {
    // // console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    
    
    const LabelledSelect = ({ label, placeholder, id, horizontal , data ,setterFunc }) => {


        const onChange = (value) => {
            setterFunc(value)
        };


        return (
        <Flex
            vertical={!horizontal}
            gap={'10px'}
            className={`${classes.container} ${!horizontal ? classes.vertical_class : classes.horizontal_call}`}>
            {label && <label htmlFor={id}>{label}</label>}
            <Select
            className={classes.select}
                showSearch
                placeholder={placeholder}
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={data}
            />
        </Flex>
    )
}

export default LabelledSelect
