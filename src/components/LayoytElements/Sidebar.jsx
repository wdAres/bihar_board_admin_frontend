import React from 'react'
import { IoBagOutline, IoGridOutline } from "react-icons/io5";
import { SlSupport } from "react-icons/sl";
import { BsCash } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css'

function Sidebar({ sidebar, handleSidebar }) {

    const linksArr = [
        {
            key: '01',
            icon: <IoGridOutline size={14} />,
            label: 'Dahboard',
            link: '/'
        },
        {
            key: '02',
            icon: <IoBagOutline size={14} />,
            label: 'Products',
            link: '/product'
        },
        {
            key: '02',
            icon: <IoBagOutline size={14} />,
            label: 'Category',
            link: '/category'
        },
        {
            key: '04',
            icon: <BsCash size={14} />,
            label: 'Payment',
            link: '/payments'
        },
        {
            key: '06',
            icon: <SlSupport size={14} />,
            label: 'Orders',
            link: '/order'
        },
        {
            key: '06',
            icon: <SlSupport size={14} />,
            label: 'Customers',
            link: '/customers'
        },
        {
            key: '05',
            icon: <SlSupport size={14} />,
            label: 'Home Banner',
            link: '/home-banner'
        },
        {
            key: '05',
            icon: <SlSupport size={14} />,
            label: 'Home Slider',
            link: '/home-slider'
        },
        {
            key: '05',
            icon: <SlSupport size={14} />,
            label: 'Support',
            link: '/support'
        },
    ]

    const cssObject = sidebar ? { left: '0' } : {}

    return (
        <>
            <div className={classes.sidebar} style={cssObject}>
                <div className={classes.sidebar_links}>
                    {linksArr.map(element => (
                        <NavLink className={classes.sidebar_link} key={element.key} to={element.link}> {element.icon} {element.label}</NavLink>
                    ))}
                </div>
            </div>
            {sidebar &&
                <div onClick={handleSidebar} className={classes.bg}></div>
            }
        </>
    )
}

export default Sidebar
