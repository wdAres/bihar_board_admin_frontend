import { Flex } from 'antd'
import React from 'react'
import classes from '../filter/filter.module.css'

function PageHeader({children,heading,cls}) {
    return (
        <div
            className={`${classes.flex_container} ${cls}`}
        >
            <Flex
                align='flex-start'
                justify='flex-start'
                gap={10}
            >
                <h2
                style={{color:'var(--color_black_2)' , fontWeight:'500'}}
                >{heading}</h2>
            </Flex>
            {children}
        </div>
    )
}

export default PageHeader
