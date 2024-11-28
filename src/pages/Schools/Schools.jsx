import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useHttp2 from '../../hooks/useHttp2'
import PageHeader from '../../components/UI/PageHeader'
import MyTable from '../../components/table/MyTable'
import MyPagination from '../../components/table/MyPagination'
import { schoolColumn } from '../../utils/Columns'
import SearchBar from '../../components/filter/SearchBar'
import { Button, Space } from 'antd'
import { FaDownload, FaPlus } from 'react-icons/fa'
import SearchAndFilter from '../../components/filter/SearchAndFilter'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { BASE_API } from '../../utils/BASE_URL'

const Schools = () => {

  const token = JSON.parse(Cookies.get('admin') ?? {})?.token
  const [date, setDate] = useState('')
  const [query, setQuery] = useState('')
  const { sendRequest, isLoading } = useHttp2()
  const [data, setData] = useState([])
  const [pageDetails, setPageDetails] = useState({})
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const navigation = useNavigate()

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
    sendRequest({
      url: `center?limit=${limit}&page=${page}&search=${query}`
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


  // const handleActive = (id, activeStatus) => {
  //   sendRequest({
  //     url: `centers/${id}/edit`,
  //     method: 'PUT',
  //     body: { active: !activeStatus }
  //   }, result => {
  //     getData()
  //   }, true)
  // }

  
  
  const downloadExcelFile = async () => {
    try {
      const response = await fetch(`${BASE_API}/api/v1/download-centers-xls`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/vnd.ms-excel',
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const blob = await response.blob();
      
      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create an anchor element and simulate a click
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.xls'); // Set the file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      toast.error('Error downloading the file');
    }
  };
  
  const handleDelete = (id) => {
    sendRequest({
      url: `center/${id}`,
      method: 'DELETE'
    }, result => {
      getData()
    }, true)
  }
  
  const columns = schoolColumn((id) => navigate(`edit/${id}`), handleDelete , id=>navigate(`/student/by-center/${id}`))
  
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: 25
        }}
      >
        <PageHeader heading={'Schools List'} >
          <Space>
            <Button onClick={downloadExcelFile}  icon={<FaDownload />} type='default'>Download Data</Button>
            <Button onClick={() => navigate('add')} type='primary' icon={<FaPlus />}  >Add School</Button>
          </Space>
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

export default Schools
