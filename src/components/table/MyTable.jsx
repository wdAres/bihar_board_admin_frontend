import { Button, Space, Table } from 'antd'
import React from 'react'
import classes from './Table.module.css'
import Container from '../UI/Container'


function MyTable({ data, columns, children, header = true }) {

    return (
        // <Container cls={classes.table}>
        <>
            {children}
            <Table
                tableLayout={'fixed'}
                scroll={{
                    x: 1000,
                }}
                pagination={false}
                columns={columns}
                showHeader={header}
                dataSource={data} />
        </>
        // </Container>
    )
}

export default MyTable
