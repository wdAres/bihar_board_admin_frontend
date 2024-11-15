import React from 'react'
import classes from './Inputs.module.css'
import { Flex  } from 'antd'
import TextArea from 'antd/es/input/TextArea'

const horizontalCss = {

}

const LabelledDescription = ({label,placeholder,id,horizontal,cls}) => {
  return (
    <Flex
    vertical={!horizontal}
    gap={'10px'}
    className={`${classes.container} ${cls} ${!horizontal ? classes.vertical_class : classes.horizontal_call}`}>
      <label  htmlFor={id}>{label}</label>
      <TextArea className={classes.textarea} style={{minHeight:'100px'}} id={id} placeholder={placeholder}/>
    </Flex>
  )
}

export default LabelledDescription
