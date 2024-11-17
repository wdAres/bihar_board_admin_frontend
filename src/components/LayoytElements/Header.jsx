import { Button, Flex } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'
import { IoMdMenu } from "react-icons/io";
import classes from './LayoutElements.module.css'
const Header = ({ handleSidebar }) => {

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/login')
        Cookies.remove('affiliate')
    }

    return (
        <Flex
            style={{ padding: '15px 20px', background: 'white' }}
            justify='space-between'
            align='center'
            gap={20}
        >
            <img src="/board.png" alt="logo" width={150} />

           <Flex
           gap={20}
           align='center'
           >
           <Button onClick={handleLogout} type='default'>Logout</Button>
           <Button className={classes.toggleBtn} onClick={handleSidebar} type='default'><IoMdMenu /></Button>
           </Flex>
        </Flex>
    )
}

export default Header