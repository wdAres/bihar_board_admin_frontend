import { Button, Card, Col, Form, Input, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import useHttp2 from '../../hooks/useHttp2';
import classes from '../Employee/Additional/Additional.module.css'
import FormItem from '../../components/FormItem/FormItem';
import { schoolPropertyColumns } from '../../utils/Columns';
import PageHeader from '../../components/UI/PageHeader'
import MyTable from '../../components/table/MyTable'
import MyPagination from '../../components/table/MyPagination'
import SearchAndFilter from '../../components/filter/SearchAndFilter'
const Property = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const { sendRequest, isLoading } = useHttp2();
    const navigate = useNavigate();
    const [date, setDate] = useState('')
    const [query, setQuery] = useState('')

    const [data, setData] = useState([])
    const [pageDetails, setPageDetails] = useState({})
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

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
        let url = id ? `Property/center/${id}` : `Property`
        sendRequest({
            url: `${url}?limit=${limit}&page=${page}&search=${query}&date=${date}`
        }, result => {
            setData(result.data.docs)
            setPageDetails({ ...result.data, docs: [] })
        })
    }

    useEffect(() => {
        getData()
    }, [limit, page, query, date])

    useEffect(() => {
        setPage(1)
    }, [query, date])

    const columns = schoolPropertyColumns()

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: 25
                }}
            >
                <PageHeader heading={'Property List'} >
                    <Space>
                        {/* <Button onClick={() => navigate('add')} type='primary' icon={<FaPlus />}  >Add Employee</Button> */}
                    </Space>
                </PageHeader>
                <SearchAndFilter {...filterProps} />
                {/* <SearchBar func={setQuery} value={query} placeholder={'Search Support by name'} /> */}
                <h4 style={{ color: 'var(--color_black_2)', fontWeight: '500' }}>
                    {pageDetails?.totalDocs ?? 0} Results</h4>
                <MyTable data={data} columns={columns} />
                <MyPagination {...paginationObject} />
            </div>
        </>
    )
}

export default Property;
