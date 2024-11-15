import { Flex } from 'antd'
import React from 'react'

function TwoLines({cssObject,title,sub_title ,isVertical=true}) {

    return (

        <Flex className={cssObject?.container} vertical={isVertical} gap={5}>
            <h3 className={cssObject?.title} style={{ fontWeight: '600', color: 'var(--color_black_2)' }}>{title}</h3>
            <p className={cssObject?.sub_title}  style={{ fontWeight: '400', color: 'var(--color_black_1)' }}>{sub_title}</p>
        </Flex>
    )
}

export default TwoLines
