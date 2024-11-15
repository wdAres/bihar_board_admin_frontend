import React from 'react'
import classes from './Inputs.module.css'
import { Flex, Input } from 'antd'

const horizontalCss = {

}

const LabelledInput = ({label,placeholder,id,horizontal,cls,prefix}) => {
  // console.log(name);
  return (
    <Flex
    vertical={!horizontal}
    gap={'10px'}
    className={`${classes.container} ${cls} ${!horizontal ? classes.vertical_class : classes.horizontal_call}`}>
      <label  htmlFor={id}>{label}</label>
      <Input name={id} prefix={prefix} id={id} placeholder={placeholder} />
    </Flex>
  )
}

export default LabelledInput
