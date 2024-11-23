import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useHttp2 from '../../hooks/useHttp2'
import PageHeader from '../../components/UI/PageHeader'
import MyTable from '../../components/table/MyTable'
import MyPagination from '../../components/table/MyPagination'
import { schoolColumn, studentColumn } from '../../utils/Columns'
import SearchBar from '../../components/filter/SearchBar'
import { FaDownload, FaPlus } from 'react-icons/fa'
import { Button, Space } from 'antd'
import Cookies from 'js-cookie'
import SearchAndFilter from '../../components/filter/SearchAndFilter'

const Students = () => {

  const {id} = useParams()

  // const token = JSON.parse(Cookies.get('admin') ?? {})?.token
  const { sendRequest, isLoading } = useHttp2()
  const token = JSON.parse(Cookies.get('admin') ?? {})?.user?.id
  const [data, setData] = useState([])
  const [pageDetails, setPageDetails] = useState({})
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const navigation = useNavigate()
  // For Filter
  const [date, setDate] = useState('')
  const [query, setQuery] = useState('')

  const filterProps = {
    query,
    setQuery,
    date,
    setDate
  }

  const downloadExcelFile = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8001/api/v1/download-students-xls', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/vnd.ms-excel', 
                'Authorization':`Bearer ${token}`
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
        console.error('Error downloading the file:', error);
    }
};


  const paginationObject = {
    pageDetails,
    limit,
    setLimit,
    page,
    setPage
  }


  const navigate = useNavigate()

  const getData = () => {
    let url = id ? `students/center/${id}` : `students`
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

  const columns = studentColumn((id) => navigate(`edit/${id}`) , id=>navigate(`view/${id}`))

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: 25
        }}
      >
        <PageHeader heading={id ? 'Students By School':'Students List'} >
          {!id &&
          <Space>
            <Button onClick={downloadExcelFile} icon={<FaDownload />} type='default'>Download Data</Button>
          </Space>
          }
        </PageHeader>
        <SearchAndFilter {...filterProps} />
        {/* <SearchBar func={setQuery} value={query} placeholder={'Search Students by name'} /> */}
        <h4 style={{ color: 'var(--color_black_2)', fontWeight: '500' }}>
          {pageDetails?.totalDocs ?? 0} Results</h4>
        <MyTable data={data} columns={columns} />
        <MyPagination {...paginationObject} />
      </div>
    </>
  )
}


export default Students
