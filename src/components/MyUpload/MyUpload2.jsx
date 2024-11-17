import { Button, Flex, Space } from 'antd'
import React from 'react'
import classes from './MyUpload2.module.css'
const MyUpload2 = ({file}) => {
    return (
        <Space>
            <Button>Upload</Button>
            {file &&
                <Flex style={{ width: '100%' }} align='center' justify='space-between'>
                    <Flex vertical>
                        <p className={classes.p}>{file?.name}</p>
                        <p className={classes.p}>{(file?.size / 1024).toFixed(2)} KB</p>
                    </Flex>
                    {/* <FaDumpster /> */}
                </Flex>
            }
        </Space>
    )
}

export default MyUpload2