import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import classes from './LayoutFile.module.css'
import Sidebar from './components/LayoytElements/Sidebar';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import Header from './components/LayoytElements/Header';
const { Content } = Layout;


const LayoutFile = ({children}) => {
    const navigate = useNavigate()
    const isUserAvailable = Cookies.get('admin')
    const [sidebar , setSidebar] = useState(false)

    useEffect(() => {
        // console.log('here');
        !isUserAvailable ? navigate('/login') : ''
    }, [isUserAvailable])

    const handleSidebar = ()=>setSidebar(!sidebar)

    return (
        <div
        className={classes.layout}
        >
             <ToastContainer
                position='top-right'
                autoClose='1000'
                closeOnClick
                pauseOnHover={false}
                draggable
                theme="light"
            />
            <Sidebar handleSidebar={handleSidebar} sidebar={sidebar} />
            <Layout
            className={classes.main_layout}
            >
                <Header handleSidebar={handleSidebar} />
                {/* <Header className={classes.header} /> */}
                <Content className={classes.content}>
                    {children}
                </Content>
            </Layout>
        </div>
    );
};

export default LayoutFile;