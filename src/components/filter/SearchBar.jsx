import { Input } from 'antd'
import React from 'react'
import { CiSearch } from 'react-icons/ci'

const SearchBar = ({func,value,placeholder=null}) => {
  return (
    <Input height={40} onChange={e=>func(e.target.value)} value={value} placeholder={placeholder ?? 'search documents'} prefix={<CiSearch size={20} />} />
  )
}

export default SearchBar