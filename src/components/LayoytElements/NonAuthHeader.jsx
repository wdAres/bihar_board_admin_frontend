import React from 'react'
import classes from './LayoutElements.module.css'
import { Header } from 'antd/es/layout/layout'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";

const NonAuthHeader = () => {


    return (
        <React.Fragment>
            <Header className={classes.header}>
                <img className={classes.logo} src='/board.png' alt="" />
                <nav className={classes.header_nav}>
                    <>
                        <Button
                            className={classes.header_nav_btn}
                            type='link'
                            href='https://biharsanskritboard.netlify.app/'
                            // icon={<CiUser className={classes.icon} />}
                        >
                            Visit Website
                        </Button>
                        {/* <Button
                            className={classes.header_nav_btn}
                            type='link'
                            icon={<CiUser className={classes.icon} />}
                        >
                            <Link to={'/login'}>Login</Link>
                        </Button>
                        <Button
                            className={classes.header_nav_btn}
                            type='link'
                            icon={<CiUser className={classes.icon} />}
                        >
                            <Link to={'/signup'}>Signup</Link>
                        </Button> */}
                    </>
                </nav>
            </Header>
        </React.Fragment>
    )
}

export default NonAuthHeader
