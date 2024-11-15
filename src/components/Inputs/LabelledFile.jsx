import React from 'react'
import classes from './Inputs.module.css'
import { Flex } from 'antd'


const LabelledFile = ({label,id,horizontal,cls}) => {
  return (
    <Flex
    vertical={!horizontal}
    gap={'10px'}
    className={`${classes.container} ${cls} ${!horizontal ? classes.vertical_class : classes.horizontal_call}`}>
      <label  htmlFor={id}>{label}</label>

    </Flex>
  )
}

export default LabelledFile
