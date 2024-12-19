import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useHttp2 from '../../hooks/useHttp2'
import PageHeader from '../../components/UI/PageHeader'
import MyTable from '../../components/table/MyTable'
import MyPagination from '../../components/table/MyPagination'
import {employeeColumns} from '../../utils/Columns'
import SearchBar from '../../components/filter/SearchBar'
import { FaDownload, FaPlus } from 'react-icons/fa'
import { Button, Space } from 'antd'
import SearchAndFilter from '../../components/filter/SearchAndFilter'
import Cookies from 'js-cookie'
const Employee = () => {
    const {id} = useParams()
  const [date, setDate] = useState('')
  const [query, setQuery] = useState('')
  const { sendRequest, isLoading } = useHttp2()
  const [data, setData] = useState([])
  const [pageDetails, setPageDetails] = useState({})
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const navigation = useNavigate()
  // const id = Cookies.get('admin') ? JSON.parse(Cookies.get('admin')).user.id : ''

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

  const navigate = useNavigate()

  
  const getData = () => {
    let url = id ? `Employee/center/${id}` : `Employee`
    sendRequest({
      url: `${url}?limit=${limit}&page=${page}&search=${query}&date=${date}`
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

  const columns = employeeColumns()

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: 25
        }}
      >
        <PageHeader heading={'Employee List'} >
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

export default Employee
