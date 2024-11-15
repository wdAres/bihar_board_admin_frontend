import { DatePicker, Flex, Segmented, Select, Space } from 'antd';
import React from 'react'
import classes from './filter.module.css'

function TabsDate({ children }) {

    // d_flex aic jcb row
    return (
        <div
            className={classes.flex_container}
        >
            <Segmented
                className={classes.tabs}
                size='middle'
                options={['All Time', '12 Months', '30 Days', '7 Days', '24 Hour']}
                onChange={(value) => {
                    // console.log(value); // string
                }}
            />
            <Select
                    className={classes.tabs_select}
                    style={{
                        height: 40
                    }}
                    defaultValue={'atoz'}
                    options={[
                        {
                            value: 'All Time',
                            label: 'All Time',
                        },
                        {
                            value: '12',
                            label: '12 Months',
                        },
                        {
                            value: '30',
                            label: '30 Days',
                        },
                        {
                            value: '7',
                            label: '7 Days',
                        },
                        {
                            value: '24',
                            label: '24 Hour',
                        },
                    ]}
                />
            <div className={classes.res_flex_div}>
                <DatePicker size='middle' />
                {children}
            </div>
        </div>
    )
}

export default TabsDate
