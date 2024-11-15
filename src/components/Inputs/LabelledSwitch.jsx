import React from 'react'
import classes from './Inputs.module.css'
import { Flex,Switch } from 'antd'

const onChange = (checked) => {
    // // console.log(`switch to ${checked}`);
};

const LabelledSwitch = ({ label, value, id, horizontal,cls }) => {
    return (
        <Flex
            vertical={!horizontal}
            gap={'10px'}
            className={`${classes.container} ${cls} ${!horizontal ? classes.vertical_class : classes.horizontal_call}`}>
            <label htmlFor={id}>{label}</label>
            <Switch defaultValue={value} className={classes.switch} onChange={onChange} />
        </Flex>
    )
}

export default LabelledSwitch
