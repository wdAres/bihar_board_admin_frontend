import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useHttp2 from '../../hooks/useHttp2'
import PageHeader from '../../components/UI/PageHeader'
import MyTable from '../../components/table/MyTable'
import MyPagination from '../../components/table/MyPagination'
import { inquiryColumn, noticeBoardColumn } from '../../utils/Columns'
import SearchBar from '../../components/filter/SearchBar'
import { FaPlus } from 'react-icons/fa'
import { Button } from 'antd'
import SearchAndFilter from '../../components/filter/SearchAndFilter'


const Notice = () => {

    const [date, setDate] = useState('')
    const [query, setQuery] = useState('')
    const { sendRequest, isLoading } = useHttp2()
    const [data, setData] = useState([])
    const [pageDetails, setPageDetails] = useState({})
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const navigate = useNavigate()

    const paginationObject = {
        pageDetails,
        limit,
        setLimit,
        page,
        setPage
    }

    const filterProps = {
        query,
        setQuery,
        date,
        setDate
    }


    const getData = () => {
        sendRequest({
            url: `notice?limit=${limit}&page=${page}&search=${query}&date=${date}`
        }, result => {
            setData(result.data.docs)
            setPageDetails({ ...result.data, docs: [] })
        })
    }

    useEffect(() => {
        getData()
    }, [limit, page, query,date])

    useEffect(() => {
        setPage(1)
    }, [query,date])

    const handleDelete = (id) => {
        sendRequest({
            url: `notice/${id}`,
            method: 'DELETE'
        }, result => {
            getData()
        },true)
    }


    const columns = noticeBoardColumn((id) => navigate(`edit/${id}`), handleDelete)

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: 25
                }}
            >
                <PageHeader heading={'Notice'} >
                    <Button onClick={() => navigate('add')} type='primary' icon={<FaPlus />}  >Add Notice</Button>
                </PageHeader>
                <SearchAndFilter {...filterProps} />
                <h4 style={{ color: 'var(--color_black_2)', fontWeight: '500' }}>
                    {pageDetails?.totalDocs ?? 0} Results</h4>
                <MyTable data={data} columns={columns} />
                <MyPagination {...paginationObject} />
            </div>
        </>
    )
}

export default Notice
