import { Flex, Pagination, Select } from 'antd'
import React from 'react'
import classes from './Table.module.css'

const MyPagination = ({ pageDetails, limit, setLimit, setPage , page }) => {

    const handlePage = (currentPage) => {
        setPage(currentPage)
    }

    const handleSelect = (data) => setLimit(data)

    return (
        <Flex
            justify='space-between'
            align='center'
        >
            <Select
                className={classes.select}
                onChange={handleSelect}
                value={limit}
                options={[
                    {
                        value: 10,
                        label: '10/Page'
                    },
                    {
                        value: 20,
                        label: '20/Page'
                    },
                    {
                        value: 50,
                        label: '50/Page'
                    },
                    {
                        value: 100,
                        label: '100/Page'
                    },
                ]}
            />
            <Pagination showSizeChanger={false} current={page} className={classes.pagination} showLessItems pageSize={limit} onChange={handlePage} total={pageDetails?.totalDocs} />
        </Flex>
    )
}

export default MyPagination
