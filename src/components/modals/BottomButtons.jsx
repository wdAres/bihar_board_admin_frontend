import { Button, Flex } from 'antd'
import React from 'react'

const BottomButtons = ({handleClose,isLoading,cls}) => {
    return (
        <Flex className={`${cls}`} style={{ marginTop: '30px !important' }} justify='flex-end' align='center' gap={'10px'}>
            <Button onClick={handleClose} htmlType='button' type='default'>Cancel</Button>
            <Button loading={isLoading} htmlType='submit' type='primary'>Send</Button>
        </Flex>
    )
}

export default BottomButtons
