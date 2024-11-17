import React from 'react'
import { IoBagOutline, IoGridOutline } from "react-icons/io5";
import { SlSupport } from "react-icons/sl";
import { BsCash } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css'
import { FaRegQuestionCircle, FaSchool } from 'react-icons/fa';
import { LuContact } from 'react-icons/lu';
import { TfiAnnouncement } from 'react-icons/tfi';
import { PiStudent } from 'react-icons/pi';

function Sidebar({ sidebar, handleSidebar }) {

    const linksArr = [
        {
            key: '01',
            icon: <FaSchool size={14} />,
            label: 'School List',
            link: '/school'
        },
        {
            key: '02',
            icon: <LuContact size={14} />,
            label: 'Contacts',
            link: '/contacts'
        },
        {
            key: '03',
            icon: <FaRegQuestionCircle size={14} />,
            label: 'Inquiries',
            link: '/inquiries'
        },
        {
            key: '04',
            icon: <TfiAnnouncement size={14} />,
            label: 'Updates',
            link: '/updates'
        },
        {
            key: '05',
            icon: <PiStudent size={14} />,
            label: 'Students',
            link: '/student'
        }
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
